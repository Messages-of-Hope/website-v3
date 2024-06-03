from flask import Blueprint, jsonify, send_file
import os


images_blueprint = Blueprint("images", __name__)


@images_blueprint.route("/<image_id>", methods=["GET"])
def images(image_id):
  """
  Get an image using a unique image id.
  Send the image as a response.
  """
  try:
      image_extensions = [".jpg", ".JPG", ".jpeg", ".JPEG", ".png", ".PNG" ".gif", ".GIF"]
      for extension in image_extensions:
        path = f"../dbimg/images/{image_id}{extension}"
        if os.path.exists(path):
          return send_file(path)
      return "Failed to find image.", 404
  except Exception as e:
      return "Failed to retrieve file.", 500
