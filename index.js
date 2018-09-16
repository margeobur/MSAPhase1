const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/my-app/public')));

app.use('/api/discord', require('./api/discord'));

app.get('*', (req,res) => {
    res.redirect('http://localhost:3000/');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);