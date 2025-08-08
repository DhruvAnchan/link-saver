// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const bookmarksRouter = require('./routes/bookmarks');
app.use('/bookmarks', bookmarksRouter);

app.use(cors());
app.use(express.json()); // To parse JSON requests

// Connect to MongoDB
const uri = process.env.ATLAS_URI; // Get this from MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});