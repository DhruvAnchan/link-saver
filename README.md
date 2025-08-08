🔖 LinkSaver - A Personal Bookmark Manager
LinkSaver is a simple, full-stack web application built using the MERN stack. It allows users to save, view, and manage their personal website bookmarks in a clean and easy-to-use interface. This project was created as a hands-on learning exercise to understand the fundamentals of full-stack development.

✨ Features
Add Bookmarks: A simple form to submit a new bookmark with a title and URL.

View All Bookmarks: A clean list displaying all saved bookmarks.

Full CRUD Functionality (Planned): The API is built to support creating, reading, updating, and deleting bookmarks.

🛠️ Tech Stack
This project is built with the MERN stack:

MongoDB: A NoSQL database used to store the bookmark data.

Express.js: A backend web framework for building the RESTful API.

React.js: A frontend JavaScript library for building the user interface.

Node.js: The JavaScript runtime environment for the backend server.

Key Libraries:

Backend: mongoose (for MongoDB object modeling), cors (for enabling cross-origin requests), dotenv (for environment variables).

Frontend: axios (for making API requests to the backend).

🚀 Installation and Setup
To get this project running locally, you'll need to set up both the backend and the frontend.

Prerequisites
Node.js installed on your machine.

A MongoDB database connection string. You can get one for free from MongoDB Atlas.

1. **Backend Setup**
First, navigate to the backend directory and set up the server.

# 1. Go into the backend folder
cd backend

# 2. Install all required dependencies
npm install

# 3. Create a .env file in the 'backend' folder and add your
####    MongoDB Atlas connection string.
####    It should look like this:
####    ATLAS_URI=mongodb+srv://<username>:<password>@cluster...

2. **Frontend Setup**
Next, open a new terminal window and navigate to the frontend directory.

# 1. Go into the frontend folder
cd frontend

# 2. Install all required dependencies
npm install

Usage
You need to have both the backend and frontend servers running simultaneously in separate terminal windows.

1. Start the Backend Server:

In the backend terminal, run:

node server.js

The server should start on http://localhost:5001.

2. Start the Frontend Server:

In the frontend terminal, run:

npm start

Your web browser should automatically open to http://localhost:3000, where you can use the application.
