from flask import Blueprint, Response, jsonify, send_file
from flask_cors import CORS
import os


images_blueprint = Blueprint("images", __name__)
CORS(images_blueprint, origins=[ os.environ["ALLOWED_ORIGIN"] ])


@images_blueprint.route("/<image_id>", methods=["GET"])
def get_image(image_id):
  """
  Get an image using a unique image id.
  Send the image as a response.
  """
  image_extensions = [".jpg", ".JPG", ".jpeg", ".JPEG", ".png", ".PNG" ".gif", ".GIF"]
  for extension in image_extensions:
    path = f"../dbimg/images/{image_id}{extension}"
    if os.path.exists(path):
      return send_file(path)
  return jsonify({"status": 404, "msg": "Failed to find image."}), 404
