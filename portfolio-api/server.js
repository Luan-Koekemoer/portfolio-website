// fileName : server.js 
// Example using the http module
const express = require('express');
const app = express();

// Create an HTTP server
app.get('/', (req, res) => {
    // Set the response headers
    res.send('yay');
});

// include routes
const qualifications = require('./routes/qualifications');

// use routes
app.use('/qualifications', qualifications);

// Specify the port to listen on
const port = 3001;

// Start the server
app.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});