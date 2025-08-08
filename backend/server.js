// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001; 

// --- MIDDLEWARE ---
// This section is crucial for fixing the "failed" status.

// 1. Enable CORS for all routes and all origins.
// This will correctly handle the browser's OPTIONS preflight request.
app.use(cors());

// 2. Enable the JSON parser for POST request bodies.
app.use(express.json());


// --- DATABASE CONNECTION ---
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("✅ MongoDB database connection established successfully");
});

// --- ROUTES ---
const bookmarksRouter = require('./routes/bookmarks');
app.use('/bookmarks', bookmarksRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the LinkSaver API!');
});


// --- START SERVER ---
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
