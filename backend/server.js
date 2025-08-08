// backend/server.js

// 1. Import the Express library
const express = require('express');

// 2. Create an instance of an Express application
const app = express();
const port = 5000;

// 3. Define a "route"
// This tells the server what to do if someone visits the main URL ('/')
app.get('/', (req, res) => {
  res.send('Hello from your Express server!');
});

// 4. Start the server
// This makes the server listen for requests on the specified port
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});