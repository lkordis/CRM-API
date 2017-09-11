const mongoose = require('mongoose'),
    Products = mongoose.model('Products'),
    Schema = mongoose.Schema;

const AccountSchema = new Schema({
    products: [
        { type: Schema.Types.ObjectId, ref: 'Products', unique: true }
    ],
    cost: Number,
    expires: Schema.Types.Date,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

AccountSchema.pre('save', function (next) {
    var account = this,
        sum = 0

    Products.find({ $or: account.products.map(value => { return { _id: new mongoose.mongo.ObjectId(value) } }) },
        (err, products) => {
            products.forEach(value => {
                sum += Number.parseFloat(value.price.split(' ')[0])
            })

            account.cost = sum
            next()
        })
})

module.exports = mongoose.model('Account', AccountSchema, 'account')