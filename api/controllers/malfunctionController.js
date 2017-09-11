var mongoose = require('mongoose'),
    Malfunction = mongoose.model('Malfunction');

exports.index = function (req, res) {
    Malfunction.find({ "type": req.params.type }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create = function (req, res) {
    var malfunction = new Malfunction({
        title: req.body.title,
        type: req.params.type,
        details: req.body.details,
        user: req.user._id
    })

    malfunction.save((err, m) => {
        if (err) res.send(err)
        else res.json(m)
    })
};