var mongoose = require('mongoose'),
    Product = mongoose.model('Products');

exports.index = function (req, res) {
    Product.find({ "type": req.params.type }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};