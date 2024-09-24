# Messages of Hope - Website v3

> ### Important Notice
>
> This project is no longer in development. Due to significant design changes and improper use of git i.e. storing large blob files and libraries, it was not efficient to continue to use this project. This project was continued in a new repository with a new design and structure.
>
> This repository is kept for historical purposes and to show the progression of the project.

This is the source code for the Messages of Hope website. The website is served using a full stack web application using NextJS and a Flask API service. The website is designed to provide a platform for users to submit messages of hope to be displayed on the website. The website is designed to be a simple and easy to use platform for users to submit messages of hope to be displayed on the website.

## Project Structure

This structure is comprised of two main programs, the full stack web application used to run the publicly facing Messages of Hope website, and an API used to provide access to the backend data base. The web application using the full stack framework NextJS, supported through a Python based API service using Flask.

- The *web-app/* directory holds the NextJS web application.
- The *api/* directory holds the Flask API.


## Web Application

The source code for the web application is held in the *web-app/* directory. This application makes use of NextJS to provide a fullstack structure at which to host the site. The project uses JavaScript and with CSS modules to style the components.

The fonts of this project are stored locally in the *fonts/*, which stores the required pre-selected fonts. The colour palette is held in the *global.css* file in the *app/* directory. The designs for the specific pages are held in individual issues, with the larger designs being created on Figma.


## API Application

This project is privately hosted existing at [https://messagesofhope.co.uk/api](https://messagesofhope.co.uk/api). The server hosting the API using an NGINX configuration to route requests to the API, preventing requests from being made except from the Messages of Hope web application. The source code for the API is held in the *api/* directory.

The Messages of Hope API is a Flask based API service. The API is designed to be used in conjunction with the Messages of Hope web application and not intended to be used as a standalone service. The Messages of Hope API stores data in a PostgreSQL database hosted using a self hosted PostgreSQL database service.

The API is explained in more detail in the [Backend Documentation](/docs/Backend.md).