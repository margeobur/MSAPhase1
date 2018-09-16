const express = require('express');
const path = require('path');

const app = express();

const config = require('./config.json')
const CLIENT_ID = config.CLIENT_ID;
const CLIENT_SECRET = config.CLIENT_SECRET;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/my-app/public')));

// An api endpoint that returns a short list of items
app.get('/api/clientInfo', (req,res) => {
    var info = {
        id: CLIENT_ID, 
        secret: CLIENT_SECRET
    };
    res.json(info);
    console.log('Sent info');
});

app.use('/api/discord', require('./api/discord'));

// Handles any requests that don't match the ones above
app.get('*', (req,res) => {
    res.redirect('http://localhost:3000/');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);