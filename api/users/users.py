import binascii
import os
import random
import bcrypt
import users.users_db as users_db
from flask import Blueprint, Response, g, jsonify, request

users_blueprint = Blueprint("users", __name__)


@users_blueprint.after_request
def after_request(response: Response):
    """
    Adds headers to the response to allow CORS.
    """
    header = response.headers

    ALLOWED_ORIGINS = [os.environ["FRONTEND_ADDR"]]
    origin = request.headers.get("Origin")
    if origin in ALLOWED_ORIGINS:
        response.headers["Access-Control-Allow-Origin"] = origin

    header["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    header["Access-Control-Allow-Headers"] = "Content-Type"
    header["Access-Control-Allow-Credentials"] = "true"

    return response


@users_blueprint.route("/login", methods=["POST"])
def login():
    """
    Log in a user by comparing the given username and password to the database.
    A unique api key is generated for them.
    """
    try:
        username = request.get_json()["username"]
        password = request.get_json()["password"]
    except Exception as e:
        return (jsonify({"status": 400, "msg": "Missing username/password."}), 400)

    try:
        username_check = users_db.check_username(g.conn, username)
        if username_check == False:
            return (
                jsonify({"status": random.randint(400, 410)}),
                random.randint(400, 410),
            )

        hashed_password = users_db.get_hashed_password(g.conn, username)
        if not bcrypt.checkpw(
            password.encode("utf-8"), hashed_password.encode("utf-8")
        ):
            return (
                jsonify({"status": random.randint(411, 420)}),
                random.randint(411, 420),
            )

        api_token = binascii.hexlify(os.urandom(32)).decode()
        g.red.set(username, api_token)
        g.red.expire(username, 1800)

        response = jsonify(
            {"status": 200, "msg": "Login successful", "username": username}
        )
        response.set_cookie(
            "moh_username",
            username,
            httponly=True,
            domain=os.environ["BACKEND_ADDR"],
        )
        response.set_cookie(
            "moh_token",
            api_token,
            httponly=True,
            domain=os.environ["BACKEND_ADDR"],
        )
        return response, 200
    except Exception as e:
        return (jsonify({"status": 500, "msg": "Failed to access database."}), 500)
