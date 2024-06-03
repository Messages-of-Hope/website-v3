from flask import Blueprint, g, jsonify, send_file, make_response
import os

import colouring.colouring_db as colouring_db


colouring_blueprint = Blueprint("colouring", __name__)


@colouring_blueprint.route("/", methods=["GET"])
def colouring():
    """
    Get a list of colouring pages.
    """
    try:
        colouring_pages = colouring_db.get_colouring_pages(g.conn)
    except Exception as e:
        print(e, flush=True)
        return "Failed to fetch from the database.", 500

    return (jsonify({
        "msg": "Messages retrieved successfully.",
        "colouring_pages": colouring_pages
    }), 200)


@colouring_blueprint.route("/<colouring_page>", methods=["GET"])
def colouring_page(colouring_page):
    """
    Get a colouring page using a unique colouring page id.
    Send the image as a response.
    """
    path = f"../dbimg/colouring/Colouring Page {colouring_page}.png"
    try:
        if os.path.exists(path):
            response = make_response(send_file(path))
            response.headers["Content-Type"] = "image/png"
            response.headers["Content-Disposition"] = f"attachment; filename=Colouring Page {colouring_page}.png"
            return response
        return "Failed to find image.", 404
    except Exception as e:
        return "Failed to retrieve file.", 500


@colouring_blueprint.route("/download/<colouring_page>", methods=["GET"])
def download_colouring_page(colouring_page):
    """
    Download a colouring page using a unique colouring page id.
    Send the image as a response and update the download count.
    """
    path = f"../dbimg/colouring/Colouring Page {colouring_page}.png"
    try:
      if os.path.exists(path):
          try:
              # If the download count update fails, the image will still be sent
              colouring_db.update_downloads(g.conn, colouring_page)
          except Exception as e:
              pass
          response = make_response(send_file(path))
          response.headers["Content-Type"] = "image/png"
          response.headers["Content-Disposition"] = f"attachment; filename=Colouring Page {colouring_page}.png"
          return response
      return "Failed to find image.", 404
    except Exception as e:
        return "Failed to retrieve file.", 500
