# Messages of Hope Website

## Project Structure

This structure is comprised of two main programs, the full stack web application used to run the publicly facing Messages of Hope website, and an API used to provide access to the backend data base. The web application using the full stack framework NextJS, supported through a Python based API service using Flask.

- The *web-app/* directory holds the NextJS web application.
- The *api/* directory holds the Flask API.


## Web Application

The source code for the web application is held in the *web-app/* directory. This application makes use of NextJS to provide a fullstack structure at which to host the site. The project uses JavaScript and with CSS modules to style the components.

The fonts of this project are stored locally in the *fonts/*, which stores the required pre-selected fonts. The colour palette is held in the *global.css* file in the *app/* directory. The designs for the specific pages are held in individual issues, with the larger designs being created on Figma.


## API Application

This project is privately hosted existing at [https://api.messagesofhope.co.uk](https://api.messagesofhope.co.uk). The server hosting the API using an NGINX configuration to route requests to the API, preventing requests from being made except from the Messages of Hope web application. The source code for the API is held in the *api/* directory.

The Messages of Hope API is a Flask based API service. The API is designed to be used in conjunction with the Messages of Hope web application and not intended to be used as a standalone service. The Messages of Hope API stores data in a PostgreSQL database hosted using Digital Ocean's managed database service.

### API Endpoints

#### Public Facing

- GET `/messages/` - Returns a random list of messages with the size of the list being determined by the argument `set_size`. The default list size is 10. This list is just the message strings.
- POST `/messages/` - Adds a message of hope to the database. The message string is sent in the body object under `message`.

- GET `/projects/` - Returns a list of objects used to summarise the current projects. The size of the list is determined by the argument `size_set`, and the order by a database valued `ranking`. Each project item in the list contains the project id, title, and thumbnail identifier.
- GET `/projects/<project-id>` - Returns the page information for the given project using the project id. The information is an object/dictionary containing the project id, title, sections of text and images.

- GET `/blog/` - Returns a list of objects used to summarise the recent blog posts. The size of the list is determined by the argument `set_size`, and the order based on date. Each post item in the list contains the post id, title, summary and thumbnail.
- GET `/blog/<post-id>` - Returns the page information for the given blog post using the post id. The information is an object/dictionary containing the post id, title, sections of text and images.

- POST `/contact/` - Adds a message to the database showing someone is trying to get in contact. The message details are sent in the body object which takes a `name`, `email`, `organisation`, `subject`, and `message`.
- POST `/contact/bags-of-hope` - Adds a message to the database showing a hosptial ward has requested a Bags of Hope drop off. The message details are sent in the body object, which takes a `name`, and `email`.

- GET `/images/<image-id>` - Returns an image file using the `image-id` as a unique identifier.

- POST `/users/login` - Creates an api token to access private pages/api endpoints creating them as cookies on the users computer. The body requires a `username` and `password` to compare to the stored information.

#### Private - Requires API Token


