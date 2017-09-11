var mongoose = require('mongoose'),
    Faq = mongoose.model('Faq');

exports.get = function (req, res) {
    Faq.find({ type: req.params.type })
        .exec(function (err, account) {
            if (err) res.send(err);
            else res.json(account);
        });
};