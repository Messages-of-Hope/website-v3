from flask import Blueprint, g, jsonify, request
import binascii
import os
import bcrypt

import auth.auth_db as auth_db
from verify_user import require_auth


auth_blueprint = Blueprint("auth", __name__)


def create_dev_cookies(response, username, access_token):
    """
    Create cookies for the user in the development environment.
    """
    response.set_cookie(
        os.environ["USERNAME_TOKEN"],
        username,
        domain=os.environ["TOKEN_ADDR"],
        max_age=31536000
    )
    response.set_cookie(
        os.environ["ACCESS_TOKEN"],
        access_token,
        domain=os.environ["TOKEN_ADDR"]
    )
    return response


def create_prod_cookies(response, username, access_token):
    """
    Create cookies for the user in the production environment.
    """
    response.set_cookie(
        os.environ["USERNAME_TOKEN"],
        username,
        httponly=True,
        secure=True,
        samesite="Strict",
        domain=os.environ["TOKEN_ADDR"],
        max_age=31536000
    )
    response.set_cookie(
        os.environ["ACCESS_TOKEN"],
        access_token,
        httponly=True,
        secure=True,
        samesite="Strict",
        domain=os.environ["TOKEN_ADDR"],
    )
    return response


@auth_blueprint.route("/login", methods=["POST"])
def login():
    """
    Log in a user by comparing the given username and password to the database.
    A unique access token is generated for them.
    """
    try:
        username = request.get_json()["username"]
        password = request.get_json()["password"]
    except Exception as e:
        return "Missing username/password.", 400

    try:
        # Check username and password validity
        username_check = auth_db.check_username(g.conn, username)
        if username_check == False:
            return "Invalid username/password.", 401
        hashed_password = auth_db.get_hashed_password(g.conn, username)
        if not bcrypt.checkpw(password.encode("utf-8"), hashed_password.encode("utf-8")):
            return "Invalid username/password.", 401

        # Get permissions
        permissions = auth_db.get_permissions(g.conn, username)

        # Generate access token
        access_token = f"{binascii.hexlify(os.urandom(64)).decode()}"
        g.red.set(username, f"{access_token}_{request.remote_addr}_{permissions}")
        g.red.expire(username, 86400)

        response = jsonify({
            "msg": "Login successful", 
            "username": username
        })

        if os.environ["RUN_ENV"] == "dev":
            response = create_dev_cookies(response, username, access_token)
        else:
            response = create_prod_cookies(response, username, access_token)

        return response, 200
    except Exception as e:
        return "Failed to access database.", 500


@auth_blueprint.route("/logout", methods=["POST"])
@require_auth(0)
def logout():
    """
    Log out a user by deleting their access token from the redis database.
    """
    try:
        username = request.cookies[os.environ["USERNAME_TOKEN"]]
    except Exception as e:
        return "Missing username.", 400

    try:
        g.red.delete(username)
        return "Logout successful", 200
    except Exception as e:
        print(e, flush=True)
        return "Failed to access database.", 500
