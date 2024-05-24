GET_PROJECTS_SUMMARY = "SELECT * FROM projects WHERE visible=1 ORDER BY ranking DESC;"
GET_PROJECTS_SUMMARY_SET = (
    "SELECT * FROM projects WHERE visible=1 ORDER BY ranking DESC LIMIT %s;"
)
GET_PROJECT = "SELECT * FROM projects WHERE id=%s;"


def project_array_to_summary_dict(arr):
    """
    Converts a project array into a dictionary only containing summary
    information.
    """
    return {
        "id": arr[0],
        "title": arr[1],
        "thumbnail": arr[3],
        "url": arr[10],
        "description": arr[2],
    }


def get_projects_summary(conn, set_size):
    """
    Gets a list of projects summarised.
    """
    cursor = conn.cursor()
    if set_size == -1:
        cursor.execute(GET_PROJECTS_SUMMARY)
    else:
        cursor.execute(GET_PROJECTS_SUMMARY_SET, (set_size,))
    projects = list(map(project_array_to_summary_dict, cursor.fetchall()))
    conn.commit()
    cursor.close()
    return projects
