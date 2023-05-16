# Meals From Dirt

Meals From Dirt is a full-stack web application that allows users to search and discover crops they can grow where they live and recipes they can make based on those crops. The app is built using React for the frontend, KoaJS for the API, and MongoDB for the database.  Postgis is used for deciphering geographical data.

## Table of Contents
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [Notes](#notes)

## Demo

[![Demonstration Video](https://img.youtube.com/vi/jjRMVBHxS-s/0.jpg)](https://www.youtube.com/watch?v=jjRMVBHxS-s)

## Getting Started

To get started with Meals From Dirt, follow these steps:

Note: A mariaDB and postgreSQL instance are required to run this app.  A mariadb SQL dump file can be found in `/database`.  The postgreSQL dump and be provided upon request due to file size restructions.

1. Clone the repository to your local machine using `git clone https://github.com/ellieMP/meals-from-dirt.git`
2. Install the necessary dependencies by running `npm install` in both the `client` and `server` directories.
3. Start the server by running `npm start` in the `meals_from_dirt` directory.
4. Start the api by running `npm test` in the `api` directory.

## Technologies Used

- React
- KoaJS
- MongoDB
- Postgres + Postgis

## Notes
Why Postgres and MariaDB?

Initally this project utilized MariaDB alone and the plan was to use a KML file representing ecoregion borders to determine an ecoregion from a set of coordinates.  This analysis took too long for each search.  Our solution was to use the PostgreSQL extention PostGIS.  We used an open source GIS software called QGIS to import our ecoregion shapemap into a PostgreSQL server.  We then used some functions from the PostGIS extention to take a set of coordinates and return what ecoregion(s) they were in.  We had a stretch goal of mergeing the MariaDB tables into our postgres database but ran out of time for this project.

Why Meals From Dirt?

As the capstone project for our computer science degrees, we wanted to create something that could create value for users while leaving a positive impact on the world.  Increasing awareness of the fragile state of the american agriculture industry and providing a resource to those that may be impacted by distater looking to grow some or all of their own food created value for the user and could leave an impact on the world.

## Contributors

Meals From Dirt was created by the following developers:

- Ellie Parker
- Erika Mendoza
- Welinton DeLeon
