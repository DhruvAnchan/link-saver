// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001; 

app.use((req, res, next) => {
  console.log(`➡️  Received a ${req.method} request for ${req.url}`);
  next();
});

app.use(cors());

// --- TEMPORARILY DISABLED ---
// console.log('Skipping express.json middleware for testing...');
// app.use(express.json()); 

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("✅ MongoDB database connection established successfully");
});

app.get('/', (req, res) => {
  console.log("✅ Request reached the / route handler");
  res.send('Welcome to the LinkSaver API!');
});

const bookmarksRouter = require('./routes/bookmarks');
app.use('/bookmarks', bookmarksRouter);

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
