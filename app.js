// app.js

const express = require('express');
const app = express();
const port = 3000;

// A simple route to respond with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
