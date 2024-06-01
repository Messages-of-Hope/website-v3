from flask import Blueprint, g, jsonify, request
from flask_cors import CORS
import binascii
import os
import random
import bcrypt

import users.users_db as users_db


users_blueprint = Blueprint("users", __name__)


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

        api_token = f"{binascii.hexlify(os.urandom(32)).decode()}_{request.remote_addr}"
        g.red.set(username, api_token)
        g.red.expire(username, 1800)

        response = jsonify(
            {"status": 200, "msg": "Login successful", "username": username}
        )
        if os.environ["RUN_ENV"] == "dev":
            response.set_cookie(
                os.environ["USERNAME_TOKEN"],
                username,
                domain=os.environ["TOKEN_ADDR"]
            )
            response.set_cookie(
                os.environ["ACCESS_TOKEN"],
                api_token,
                domain=os.environ["TOKEN_ADDR"]
            )
        else:
            response.set_cookie(
                os.environ["USERNAME_TOKEN"],
                username,
                httponly=True,
                secure=True,
                samesite="Strict",
                domain=os.environ["TOKEN_ADDR"],
                path="/api"
            )
            response.set_cookie(
                os.environ["ACCESS_TOKEN"],
                api_token,
                httponly=True,
                secure=True,
                samesite="Strict",
                domain=os.environ["TOKEN_ADDR"],
                path="/api"
            )
        return response, 200
    except Exception as e:
        print(e, flush=True)
        return (jsonify({"status": 500, "msg": "Failed to access database."}), 500)


def verify_cookie(request):
    """
    Verifies the user's cookie.
    """
    try:
        username = request.cookies[os.environ["USERNAME_TOKEN"]]
        api_token = request.cookies[os.environ["ACCESS_TOKEN"]]
    except Exception as e:
        return False

    try:
        if g.red.get(username) == api_token:
            g.red.expire(username, 1800)
            return True
        else:
            return False
    except Exception as e:
        print(e, flush=True)
        return False


@users_blueprint.route("/logout", methods=["POST"])
def logout():
    """
    Log out a user by deleting their api key.
    """
    if not verify_cookie(request):
        return (jsonify({"status": 401, "msg": "Unauthorised"}), 401)    

    username = request.cookies[os.environ["USERNAME_TOKEN"]]

    try:
        g.red.delete(username)
        return jsonify({"status": 200, "msg": "Logout successful"}), 200
    except Exception as e:
        print(e, flush=True)
        return (jsonify({"status": 500, "msg": "Failed to access database."}), 500)