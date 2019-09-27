const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/server'));

app.post('/', (req, res) => {
    console.log('Someone POSTed to / : ' + JSON.stringify(req.body));
    res.send({ ok: true });
})

app.listen(5000, () => {
    console.log('Listening');
})