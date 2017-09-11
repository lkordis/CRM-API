'use strict';
const auth = require('../controllers/authController')

module.exports = function (app) {
    var malfunction = require('../controllers/malfunctionController');

    app.route('/malfunction/:type')
        .post(auth.authorization, malfunction.create)
};