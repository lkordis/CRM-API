'use strict';
const auth = require('../controllers/authController')

module.exports = function (app) {
    var account = require('../controllers/accountController');

    app.route('/account')
        .get(auth.authorization, account.get)
};