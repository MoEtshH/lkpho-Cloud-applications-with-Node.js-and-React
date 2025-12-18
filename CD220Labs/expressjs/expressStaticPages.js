// Import the Express.js library
const express = require("express");
const path = require("path");

// Create an instance of an Express application
const app = new express();

// Serve static files from the 'cad220_staticfiles' directory (relative to this file)
app.use(express.static(path.join(__dirname, "cad220_staticfiles")));

// Start the server and listen on port 3333
app.listen(3333, () => {
  console.log(`Listening at http://localhost:3333`);
});
