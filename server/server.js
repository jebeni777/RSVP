const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client')));

app.post('/RSVP', (req, res) => {
    console.log('Someone POSTed to /RSVP: ' + JSON.stringify(req.body));
    res.send('Post request to the homepage');
})

app.listen(5000, () => {
    console.log('Listening');
})