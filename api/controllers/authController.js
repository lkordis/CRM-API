const jsonwebtoken = require("jsonwebtoken"),
    config = require('../../config')

//Provjera tokena
exports.authorization = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], config.secret, function (err, decode) {
            if (err) req.user = undefined;
            req.user = decode._doc;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
};