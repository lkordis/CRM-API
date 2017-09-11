'use strict';
const auth = require('../controllers/authController')

module.exports = function (app) {
    var cart = require('../controllers/cartController');

    app.route('/cart')
        .get(auth.authorization, cart.get)
        .post(auth.authorization, cart.add)
        .delete(auth.authorization, cart.remove)

    app.route('/cart/buy')
        .post(auth.authorization, cart.buy)
};