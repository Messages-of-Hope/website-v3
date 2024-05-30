GET_COLOURING_PAGES = "SELECT * FROM colouring_pages WHERE visible=1 ORDER BY downloads DESC;"
INCREMENT_DOWNLOADS = "UPDATE colouring_pages SET downloads = downloads + 1 WHERE id=%s;"

def colouring_page_array_to_dict(arr):
    """
    Converts a colouring page array into a dictionary.
    """
    return {
        "id": arr[0],
        "title": arr[1],
    }

def get_colouring_pages(conn):
    """
    Gets a list of colouring pages.
    """
    cursor = conn.cursor()
    cursor.execute(GET_COLOURING_PAGES)
    colouring_pages = list(map(colouring_page_array_to_dict, cursor.fetchall()))
    conn.commit()
    cursor.close()
    return colouring_pages

def update_downloads(conn, colouring_page):
    """
    Updates the number of downloads for a colouring page.
    """
    cursor = conn.cursor()
    cursor.execute(INCREMENT_DOWNLOADS, (colouring_page,))
    conn.commit()
    cursor.close()