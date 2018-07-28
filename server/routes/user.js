const express = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');

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

    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password,10),
        role: body.role
    });

    user.save((err, userDb) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDb
        })
    });
})

module.exports = app;