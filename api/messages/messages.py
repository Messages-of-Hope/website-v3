from flask import Blueprint, g, jsonify, request
from flask_cors import CORS
import os

import messages.messages_db as messages_db


messages_blueprint = Blueprint("messages", __name__)
CORS(messages_blueprint, origins=[ os.environ["ALLOWED_ORIGIN"] ])


def save_message(request):
    """
    Save a message to the database.
    """
    try:
        message = request.get_json()["message"]
    except Exception as e:
        return (jsonify({
            "status": 400,
            "msg": "Failed to get message from request.",
            "error": str(e),
        }), 400)

    try:
        category = "uncategorised"
        sourced = "website"
        public = 0
        used = 0
        messages_db.insert_message(g.conn, message, category, sourced, public, used)
    except Exception as e:
        return (jsonify({
            "status": 500,
            "msg": "Failed to insert message into the database.",
            "error": str(e),
        }), 500)

    return (jsonify({
        "status": 200,
        "msg": "Message inserted successfully",
        "message": message,
    }), 200)


def get_messages():
    """
    Get a list of random public messages from the database the size determined by
    request arguments.
    """
    if request.method == "POST":
        return save_message(request)

    total = request.args.get("total")
    if total is None:
        total = 10
    else:
        try:
            total = int(total)
        except Exception as e:
            total = 10

    try:
        messages = messages_db.get_random_message_set(g.conn, total)
    except Exception as e:
        print(e, flush=True)
        return (
            jsonify({"status": 500, "msg": "Failed to fetch from the database."}),
            500,
        )

    return (jsonify({
        "status": 200,
        "msg": "Messages retrieved successfully",
        "messages": messages,
    }), 200)


@messages_blueprint.route("/", methods=["GET", "POST"])
def messages():
    """
    Endpoint for getting and saving messages.
    """
    if request.method == "POST":
        return save_message(request)
    elif request.method == "GET":
        return get_messages()
