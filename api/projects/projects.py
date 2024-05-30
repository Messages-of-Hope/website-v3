import projects.projects_db as projects_db
from flask import Blueprint, Response, g, jsonify, request
from flask_cors import CORS

projects_blueprint = Blueprint("projects", __name__)
CORS(projects_blueprint)

@projects_blueprint.route("/", methods=["GET"])
def get_projects_summary():
    """
    Get a list of project summarys the size of which is determined by
    arguments.
    """
    total = request.args.get("total")
    if total is None:
        total = -1
    else:
        try:
            total = int(total)
        except Exception as e:
            total = -1

    try:
        projects_summary = projects_db.get_projects_summary(g.conn, total)
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
                "projects": projects_summary,
            }
        ),
        200,
    )
