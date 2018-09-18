const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/my-app/public')));

app.use('/api/discord', require('./api/discord'));

app.get('*', (req,res) => {
    res.redirect('https://marcBeDisBot.azurewebsites.net:80/');
});

const port = 5000;
app.listen(5000);

console.log('App is listening on port ' + port);