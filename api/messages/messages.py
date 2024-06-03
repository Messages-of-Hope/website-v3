from flask import Blueprint, g, jsonify, request

import messages.messages_db as messages_db


messages_blueprint = Blueprint("messages", __name__)


def save_message(request):
    """
    Save a message to the database.
    """
    try:
        message = request.get_json()["message"]
    except Exception as e:
        return "Failed to get message from request.", 400

    try:
        category = "uncategorised"
        sourced = "website"
        public = 0
        used = 0
        messages_db.insert_message(g.conn, message, category, sourced, public, used)
    except Exception as e:
        return "Failed to insert message into the database.", 500

    return "Message inserted successfully", 200


def get_messages():
    """
    Get a list of random public messages from the database the size determined by
    request arguments.
    """
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
        return "Failed to fetch from the database.", 500

    return (jsonify({
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
