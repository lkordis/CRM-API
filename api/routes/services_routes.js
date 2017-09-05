'use strict';
module.exports = function (app) {
    var products = require('../controllers/servicesController');

    app.route('/services/:type')
        .get(products.index)
    // .post(products.create);

    // app.route('/products/:productId')
    //     .get(products.get)
    //     .put(products.update)
    //     .delete(products.delete);
};