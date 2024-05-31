import os
from flask import Blueprint, Response, jsonify, send_file
from flask_cors import CORS


images_blueprint = Blueprint("images", __name__)
CORS(images_blueprint, origins=[ os.environ["ALLOWED_ORIGIN"] ])

@images_blueprint.after_request
def after_request(response: Response):
    """
    Adds headers to the response to allow cross origin requests.
    """
    header = response.headers
    header["Access-Control-Allow-Origin"] = "*"
    return response


@images_blueprint.route("/<image_id>", methods=["GET"])
def get_image(image_id):
  """
  Get an image using a unique image id.
  """
  image_extensions = [".jpg", ".JPG", ".jpeg", ".JPEG", ".png", ".PNG" ".gif", ".GIF"]  # Add more extensions if needed
  for extension in image_extensions:
    path = f"../dbimg/images/{image_id}{extension}"
    if os.path.exists(path):
      return send_file(path)
  return jsonify({"status": 404, "msg": "Failed to find image."}), 404
