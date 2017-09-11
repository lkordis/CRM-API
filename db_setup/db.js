var mongoose = require('mongoose'),
    Product = mongoose.model('Products'),
    User = mongoose.model('User'),
    Faq = mongoose.model('Faq'),
    Account = mongoose.model('Account');

exports.fill = () => {
    require('./products.json').data.forEach(element => {
        var faq = new Product(element)
        faq.save((err, p) => {
            if (err)
                console.log(err);
            console.log(p);
        });
    });
}

exports.accounts = () => {
    User.findOne({ email: 'lovro.kordis@gmail.com' }, (err, user) => {
        Product.findOne({}, (err, p) => {
            var account = new Account({
                user: user._id,
                products: [p.id],
                expires: new Date
            })

            account.save((err, a) => {
                if (err) console.log(err)
                else console.log(a)
            })
        })
    })
}