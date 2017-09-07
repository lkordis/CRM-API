var mongoose = require('mongoose'),
    Account = mongoose.model('Account');

exports.get = function (req, res) {
    Account.findOne({ user: new mongoose.mongo.ObjectId(req.user._id) })
        .populate('user')
        .populate('services')
        .exec(function (err, account) {
            console.log(account)
            if (err) res.send(err);
            else res.json(account);
        });
};