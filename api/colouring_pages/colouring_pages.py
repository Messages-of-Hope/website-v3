import colouring_pages.colouring_pages_db as colouring_pages_db
from flask import Blueprint, Response, g, jsonify, request, send_file, make_response
from flask_cors import CORS
import os

colouring_pages_blueprint = Blueprint("colouring-pages", __name__)
CORS(colouring_pages_blueprint)

@colouring_pages_blueprint.route("/", methods=["GET"])
def get_colouring_pages():
    """
    Get a list of colouring pages.
    """

    try:
        colouring_pages = colouring_pages_db.get_colouring_pages(g.conn)
    except Exception as e:
        print(e, flush=True)
        return (
            jsonify({"status": 500, "msg": "Failed to fetch from the database."}),
            500,
        )

    return (
        jsonify(
            {
                "status": 200,
                "msg": "Messages retrieved successfully.",
                "colouring_pages": colouring_pages
            }
        ),
        200,
    )

@colouring_pages_blueprint.route("/<colouring_page>", methods=["GET"])
def get_colouring_page(colouring_page):
    """
    Get a colouring page using a unique colouring page id.
    """
    path = f"../dbimg/colouring-pages/Colouring Page {colouring_page}.png"
    if os.path.exists(path):
        response = make_response(send_file(path))
        response.headers["Content-Type"] = "image/png"
        response.headers["Content-Disposition"] = f"attachment; filename=Colouring Page {colouring_page}.png"
        return response
    return jsonify({"status": 404, "msg": "Failed to find image."}), 404

@colouring_pages_blueprint.route("/download/<colouring_page>", methods=["POST"])
def download_colouring_page(colouring_page):
    """
    Download a colouring page using a unique colouring page id.
    """
    colouring_pages_db.update_downloads(g.conn, colouring_page)
    return jsonify({"status": 200, "msg": "Download count updated."}), 200