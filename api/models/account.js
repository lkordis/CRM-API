const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const AccountSchema = new Schema({
    services: [
        { type: Schema.Types.ObjectId, ref: 'Services' }
    ],
    cost: Number,
    expires: Schema.Types.Date,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Account', AccountSchema, 'account')