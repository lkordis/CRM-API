'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MalfunctionSchema = new Schema({
    title: String,
    type: { type: String, required: true },
    details: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Malfunction', MalfunctionSchema, 'malfunction');