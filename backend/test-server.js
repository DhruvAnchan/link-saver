// backend/test-server.js

// Use ONLY Node.js's built-in HTTP module
const http = require('http');

const port = 5001;

// Create a very simple server
const server = http.createServer((req, res) => {
  // This code runs for ANY request
  console.log('--- Test server received a request! ---');
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from the test server!');
});

// Start the server
server.listen(port, () => {
  console.log(`🧪 Test server is running on http://localhost:${port}`);
});
