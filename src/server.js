// BASIC SERVER

// import express library into the project
const express = require('express');

// instantiate express inside a variable called app
const app = express();

// set up the port
const port = 8000;

// MIDDLEWARE (goes BELOW)

app.use(express.urlencoded()); // this is basically to decode the data send through html form

app.use(express.static('public')); // this is to serve our public folder as a static folder


// ROUTES

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// NOW create the server
    // tell app to listen
    // pass in the port at which you want the server to run
        // log a message to the console that the server is running
app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});