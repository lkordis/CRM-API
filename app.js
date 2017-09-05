var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Product = require('./api/models/product'), //created model loading here
    Service = require('./api/models/service'),
    extend = require('util')._extend,
    bodyParser = require('body-parser');

app.listen(port);

// Skripta za punjenje baze
// require('./db_setup/db.js').fill()

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/SedamIT');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var product_routes = require('./api/routes/products_routes')
var service_routes = require('./api/routes/services_routes'); //importing route

product_routes(app); //register the route
service_routes(app)

console.log('SedamIT RESTful API server started on: ' + port);
