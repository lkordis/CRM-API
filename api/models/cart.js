const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CartSchema = new Schema({
    products: [
        { type: Schema.Types.ObjectId, ref: 'Products' }
    ],
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Cart', CartSchema, 'cart')