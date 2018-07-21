require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.json("getUser");
});

app.put('/user/:id', (req, res) => {

    let id = req.params.id;

    res.json({ id });
});

app.post('/user', (req, res) => {
    let body = req.body;

    if (!body.name) {
        res.status(400).json({
            ok: false,
            description: "Name is required"
        });
    } else {
        res.json(body);
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port);
})