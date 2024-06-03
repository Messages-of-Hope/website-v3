from flask import Flask, g, request, jsonify
from flask_cors import CORS
from flask_mail import Mail
from psycopg2.pool import ThreadedConnectionPool
import os
import redis

from auth.auth import auth_blueprint
from colouring.colouring import colouring_blueprint
from images.images import images_blueprint
from mail.mail import mail_blueprint
from messages.messages import messages_blueprint
from projects.projects import projects_blueprint


# Create the top-level Flask app
app = Flask(__name__)
app.url_map.strict_slashes = False


# Create a connection pool to the database
database_url = f"postgresql://{os.environ['POSTGRES_USERNAME']}:{os.environ['POSTGRES_PASSWORD']}@moh-web3-postgres:5432/{os.environ['POSTGRES_DATABASE']}"
app.conn_pool = ThreadedConnectionPool(os.environ["MIN_POOL_SIZE"], os.environ["MAX_POOL_SIZE"], database_url)


# Register blueprints for the different parts of the API
app.register_blueprint(auth_blueprint)
app.register_blueprint(colouring_blueprint, url_prefix="/colouring")
app.register_blueprint(mail_blueprint, url_prefix="/mail")
app.register_blueprint(images_blueprint, url_prefix="/images")
app.register_blueprint(messages_blueprint, url_prefix="/messages")
app.register_blueprint(projects_blueprint, url_prefix="/projects")


# Setup email sending
app.config.update(dict(
    MAIL_SERVER="smtp.gmail.com",
    MAIL_PORT=465,
    MAIL_USE_TLS=False,
    MAIL_USE_SSL=True,
    MAIL_USERNAME=os.environ["EMAIL_USERNAME"],
    MAIL_PASSWORD=os.environ["EMAIL_PASSWORD"]
))
mail = Mail(app)


def check_origin():
    """
    Checks if the origin is allowed.
    """
    if os.environ["RUN_ENV"] == "dev":
        return True

    origin = request.headers.get("Origin")
    if origin is not None:
        return request.headers.get("Origin") == os.environ["ALLOWED_ORIGIN"]
    # If the origin is not set, it is likely a local request
    return True


def allow_origin_preflight():
    """
    Adds headers to the response to allow CORS.
    """
    headers = {
        "Access-Control-Allow-Origin": os.environ["ALLOWED_ORIGIN"],
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, UPDATE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Credentials": "true"
    }
    return jsonify(headers), 200
    

def connect_to_db():
    """
    Initialises/re-establishes the database connection using the connection pool.
    """
    try:
        if "red" not in g:
            g.red = redis.Redis(host="moh-web3-redis", port=6379, decode_responses=True)
        if "conn" not in g:
            g.conn = app.conn_pool.getconn()
            g.conn.cursor().execute("SELECT 1")
    except Exception as e:
        app.conn_pool = ThreadedConnectionPool(
            os.environ["MIN_POOL_SIZE"],
            os.environ["MAX_POOL_SIZE"],
            database_url,
        )
        CORS(app)
        g.conn = app.conn_pool.getconn()


def add_mail_to_g():
    """
    Adds the mail object to the global object.
    """
    g.mail = mail


def add_headers(response):
    """
    Adds headers to the response to allow CORS.
    """
    response.headers.add('Access-Control-Allow-Origin', os.environ["ALLOWED_ORIGIN"])
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, UPDATE, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response


def release_db_connection():
    """
    Puts the database connection back into the connection pool.
    """
    if "conn" in g:
        app.conn_pool.putconn(g.conn)


@app.before_request
def before_request():
    if not check_origin():
        return "Origin not allowed", 403
    if request.method == "OPTIONS" or request.method == "options":
        return allow_origin_preflight()
    connect_to_db()
    add_mail_to_g()


@app.after_request
def after_request(response):
    """
    Adds headers to the response to allow CORS.
    """
    return add_headers(response)


@app.teardown_request
def teardown_request(exception):
    """
    Puts the database connection back into the connection pool.
    """
    release_db_connection()


# Development server
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=os.environ["BACKEND_PORT"])
