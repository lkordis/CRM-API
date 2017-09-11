var mongoose = require('mongoose'),
    Product = mongoose.model('Products'),
    Account = mongoose.model('Account'),
    Cart = mongoose.model('Cart');

exports.get = function (req, res) {
    Cart.findOne({ user: new mongoose.mongo.ObjectId(req.user._id) })
        .populate('user')
        .populate('products')
        .exec(function (err, cart) {
            if (err) res.send(err);
            else res.json(cart);
        });
};

exports.add = function (req, res) {
    Cart.findOne({ user: new mongoose.mongo.ObjectId(req.user._id) })
        .exec(function (err, cart) {
            if (err) res.send(err);
            else if (cart) {
                var products = cart.products
                products.push(new mongoose.mongo.ObjectId(req.body.item))

                cart.set({ products: products })
            } else {
                cart = new Cart({
                    products: [new mongoose.mongo.ObjectId(req.body.item)],
                    user: new mongoose.mongo.ObjectId(req.user._id)
                })
            }
            cart.save((err, c) => {
                if (err) res.send(err)
                else res.json(c)
            })
        });
};

exports.buy = function (req, res) {
    Account.findOne({ user: new mongoose.mongo.ObjectId(req.user._id) }, (err, acc) => {
        if (err) res.send(err)
        else {
            Cart.findOneAndRemove({ user: new mongoose.mongo.ObjectId(req.user._id) }, (err, cart) => {
                if (err) res.send(err)
                else {
                    var products = acc.products
                    products.push(cart.products)

                    acc.set({ products: products })
                    acc.save((err, a) => {
                        if (err) res.send(err)
                        else res.json(a)
                    })
                }
            })
        }
    })
}

exports.remove = function (req, res) {
    Cart.findOneAndRemove({ user: new mongoose.mongo.ObjectId(req.user._id) }, (err, cart) => {
        if (err) res.send(err)
        else res.json(cart)
    })
}