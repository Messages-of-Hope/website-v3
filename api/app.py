from flask import Flask, g, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from psycopg2.pool import ThreadedConnectionPool
import os
import redis

from projects.projects import projects_blueprint
from messages.messages import messages_blueprint
from images.images import images_blueprint
from colouring_pages.colouring_pages import colouring_pages_blueprint
from users.users import users_blueprint


# Create the top-level Flask app
app = Flask(__name__)
app.url_map.strict_slashes = False


# Create a connection pool to the database
database_url = f"postgresql://{os.environ['POSTGRES_USERNAME']}:{os.environ['POSTGRES_PASSWORD']}@moh-web3-postgres:5432/{os.environ['POSTGRES_DATABASE']}"
app.conn_pool = ThreadedConnectionPool(os.environ["MIN_POOL_SIZE"], os.environ["MAX_POOL_SIZE"], database_url)


# Register blueprints for the different parts of the API
app.register_blueprint(images_blueprint, url_prefix="/images")
app.register_blueprint(projects_blueprint, url_prefix="/projects")
app.register_blueprint(messages_blueprint, url_prefix="/messages")
app.register_blueprint(colouring_pages_blueprint, url_prefix="/colouring-pages")
app.register_blueprint(users_blueprint, url_prefix="/users")


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


# Setup cross-origin resource sharing
# See https://flask-cors.readthedocs.io/en/3.0.7/
# https://flask-cors.corydolphin.com/en/latest/api.html#using-cors-with-blueprints
# CORS(app, origins=[ os.environ["ALLOWED_ORIGIN"] ])


@app.before_request 
def set_headers():
    """
    Adds headers to the response to allow CORS.
    Dealing with preflight requests.
    """
    headers = { 
        'Access-Control-Allow-Origin': os.environ["ALLOWED_ORIGIN"],
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, UPDATE, OPTIONS', 
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'true'
    } 
    if request.method == 'OPTIONS' or request.method == 'options': 
        return jsonify(headers), 200


@app.after_request
def after_request(response):
    """
    Adds headers to the response to allow CORS.
    """
    response.headers.add('Access-Control-Allow-Origin', os.environ["ALLOWED_ORIGIN"])
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, UPDATE, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response


@app.before_request
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


@app.teardown_request
def release_connection(exception):
    """
    Puts the database connection back into the connection pool.
    """
    if "conn" in g:
        app.conn_pool.putconn(g.conn)


@app.route("/send-email", methods=["POST"])
def send_email():
    """
    Sends an email to the specified email address.
    """
    try:
        name = request.get_json()["name"]
        email = request.get_json()["email"]
        organisation = request.get_json()["organisation"]
        subject = request.get_json()["subject"]
        message = request.get_json()["message"]
    except Exception as e:
        return jsonify({"status": 400, "msg": "Missing email details."}), 400

    try:
        # Send email here
        msg = Message(
            subject=subject,
            sender=os.environ["EMAIL_USERNAME"],
            recipients=["contact@messagesofhope.co.uk"],
            body=f"From: {name}\nEmail: {email}\nOrganisation: {organisation}\n\n{message}",
        )
        mail.send(msg)
    except Exception as e:
        print(e, flush=True)
        return jsonify({"status": 500, "msg": "Failed to send email."}), 500

    return jsonify({"status": 200, "msg": "Email sent successfully."}), 200


# Development server
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=os.environ["BACKEND_PORT"])
