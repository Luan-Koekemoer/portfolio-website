// fileName : server.js 
// Example using the http module
const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

// Create an HTTP server
app.get('/', (req, res) => {
    // Set the response headers
    res.send('yay');
});

// include routes
const cards = require('./routes/cards');

// use routes
app.use('/cards', cards);

// Specify the port to listen on
const port = 3001;

// Start the server
app.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});