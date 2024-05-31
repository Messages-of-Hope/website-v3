import datetime


GET_RANDOM_MESSAGE_SET = (
    "SELECT * FROM messages WHERE public=1 ORDER BY RANDOM() LIMIT %s;"
)
INSERT_MESSAGE = "INSERT INTO messages (message, date, category, sourced, public, used) VALUES (%s, %s, %s, %s, %s, %s);"


def message_array_to_string(arr):
    """
    Convert a message array into just the message string.
    """
    return arr[1]


def get_random_message_set(conn, set_size):
    """
    Returns an array of messages of the given size.
    """
    cursor = conn.cursor()
    cursor.execute(GET_RANDOM_MESSAGE_SET, (set_size,))
    mess = list(map(message_array_to_string, cursor.fetchall()))
    conn.commit()
    cursor.close()
    return mess


def insert_message(conn, message, category, sourced, public, used):
    """
    Inserts a message into the database.
    """
    date = datetime.datetime.now()
    cursor = conn.cursor()
    cursor.execute(INSERT_MESSAGE, (message, date, category, sourced, public, used))
    conn.commit()
    cursor.close()
    return

