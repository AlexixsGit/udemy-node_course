const express = require('express');

const app = express();

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

module.exports = app;