var mongoose = require('mongoose'),
    Service = mongoose.model('Services'),
    User = mongoose.model('User'),
    Account = mongoose.model('Account');

exports.fill = () => {
    require('./services.json').data.forEach(element => {
        var product = new Service(element)
        product.save((err, p) => {
            if (err)
                console.log(err);
            console.log(p);
        });
    });
}

exports.accounts = () => {
    Account.findOne({}).populate('user').populate('services').exec((err, res) => {
        console.log(res)
    })
}