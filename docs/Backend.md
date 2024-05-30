# Backend - Flask Server

---

## Introduction

The backend of the project is a Flask server that provides an API for the frontend to interact with the database. 

## Implementation

The backend server exists as a Python module in the **api** directory. The server runs using multiple Flask blueprints, each of which is responsible for a different set of endpoints. Each blueprint is defined in a separate directory containing the blueprint and the functions that are used to access the database.

The server connects to a PostgreSQL database using the `psycopg2` library. More information on the database setup can be found in the [Database](Database.md) documentation.

## Public Endpoints

The server has the following endpoints that are accessible to the public, and do not require any authentication.

### `/messages/`

- `/` - GET - Get a list of messages from the database that have been set to public. The size of the list is determined by the `total` attribute in the request, with the default being 10.
- `/` - POST - Add a message to the database. The request is required to have a `message` field in the JSON body. The message is added to the database with set attributes and is not public by default.

### `/images/`

- `/<image_id>` - GET - Get an image from the server. This is not stored in the database, but rather in the **images** directory in the server in the **dbimg** directory. The endpoint does not require a file extension, as the server will automatically add the correct extension to the file.

### `/projects/`

- `/` - GET - Get a list of projects from the database. The size of the list is determined by the `total` attribute in the request, with the default being -1 and returning all projects.

### `/colouring-pages/`

- `/` - GET - Get a list of all the colouring pages in the database ordered by the number of downloads.
- `/<colouring_page>` - GET - Get the image of a colouring page from the server. This is not stored in the database, but rather in the **colouring-pages** directory in the server in the **dbimg** directory. The endpoint does not require a file extension, as the server will automatically add the correct extension to the file.
- `/download/<colouring_page>` - POST - Increment the download count of a colouring page in the database.

### `/send-email/`

- `/` - POST - Used to send an email to the contact email address. The request uses a JSON body with the following fields:
    - `name` - The name of the sender.
    - `email` - The email of the sender.
    - `subject` - The subject of the email.
    - `message` - The message of the email.
    - `organisation` - The organisation of the sender. This field is optional.

This is the only endpoint that is not attached to a blueprint. It is used to send emails to the contact email address through a gmail account. The email is sent using the `smtplib` library.