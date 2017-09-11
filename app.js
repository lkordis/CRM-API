var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Product = require('./api/models/product'), //created model loading here
    Service = require('./api/models/service'),
    Account = require('./api/models/account'),
    Malfunction = require('./api/models/malfunction'),
    Faq = require('./api/models/faq'),
    Cart = require('./api/models/cart'),
    config = require('./config'),
    User = require('./api/models/user'),
    jsonwebtoken = require("jsonwebtoken"),
    bodyParser = require('body-parser');

app.listen(port);

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Skripta za punjenje baze
// require('./db_setup/db.js').fill()
// require('./db_setup/db.js').accounts()

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/SedamIT', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importing route
var product_routes = require('./api/routes/products_routes')
var service_routes = require('./api/routes/services_routes');
var auth_routes = require('./api/routes/auth_routes')
var react_routes = require('./api/routes/react_routes')
var account_routes = require('./api/routes/account_routes');
var faq_routes = require('./api/routes/faq_routes');
var malfunction_routes = require('./api/routes/malfunction_routes');
var cart_routes = require('./api/routes/cart_routes');

product_routes(app); //register the route
service_routes(app);
auth_routes(app)
react_routes(app)
account_routes(app)
faq_routes(app)
malfunction_routes(app)
cart_routes(app)

console.log('SedamIT RESTful API server started on: ' + port);
