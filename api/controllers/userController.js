'use strict'
const jwt = require('jsonwebtoken'),
    config = require('../../config'),
    request = require('request'),
    User = require('../models/user');

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) res.send(err);
        if (user == null) res.send("Ne postoji korisnik sa podacima koje ste upisali.")
        var data = JSON.parse(req.query.data)

        // test a matching password
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (err) res.send(err);
            request.post(`${data.redirect_url}?data=${JSON.stringify({
                token: 'JWT ' + generateToken(user),
                user: user,
                address: data.address,
                dialog_name: data.dialog_name
            })}`).on('error', (error) => {
                res.send(error)
            }).on('response', response => {
                res.send("Hvala na prijavi!")
            })
        });
    })
}

module.exports.register = function (req, res, next) {
    // Check for registration errors
    const email = req.body.email;
    const firstName = req.body.name;
    const lastName = req.body.lastName;
    const password = req.body.password;

    // Return error if no email provided
    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
    }

    // Return error if full name not provided
    if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' });
    }

    // Return error if no password provided
    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }

        // If user is not unique, return error
        if (existingUser) {
            return res.status(422).send({ error: 'That email address is already in use.' });
        }

        // If email is unique and password was provided, create account
        let user = new User({
            email: email,
            password: password,
            profile: { firstName: firstName, lastName: lastName }
        });

        user.save(function (err, user) {
            if (err) { return next(err); }

            // Respond with JWT if user was created
            res.status(201).json({
                token: 'JWT ' + generateToken(user),
                user: user
            });
        });
    });
}