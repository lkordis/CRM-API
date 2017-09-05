var mongoose = require('mongoose'),
    Service = mongoose.model('Services');

exports.index = function (req, res) {
    Service.find({ "type": req.params.type }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};