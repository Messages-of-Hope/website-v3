from flask import Blueprint, g, jsonify, send_file, make_response, request
from flask_mail import Message
import os


mail_blueprint = Blueprint("mail", __name__)


@mail_blueprint.route("/", methods=["POST"])
def mail():
    """
    Sends an email to the contact email address.
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
        g.mail.send(msg)
    except Exception as e:
        print(e, flush=True)
        return jsonify({"status": 500, "msg": "Failed to send email."}), 500

    return jsonify({"status": 200, "msg": "Email sent successfully."}), 200