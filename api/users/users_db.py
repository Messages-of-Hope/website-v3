GET_USERNAME = "SELECT username FROM users WHERE username = %s;"
GET_HASHED_PASSWORD = "SELECT hashed_password FROM users WHERE username = %s;"


def check_username(conn, username):
    """
    Check whether username exists in the database.
    """
    cursor = conn.cursor()
    cursor.execute(GET_USERNAME, (username,))
    res = cursor.fetchone() is not None
    conn.commit()
    cursor.close()
    return res


def get_hashed_password(conn, username):
    """
    Get the hashed password for a given user.
    """
    cursor = conn.cursor()
    cursor.execute(GET_HASHED_PASSWORD, (username,))
    hash = cursor.fetchone()[0]
    conn.commit()
    cursor.close()
    return hash
