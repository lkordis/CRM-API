'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
    title: String,
    image_url: [String],
    type: { type: String, required: true },
    price: { type: String, required: true },
    details: { type: String, required: true },
    details_url: { type: String, required: true },
});

module.exports = mongoose.model('Products', ProductSchema, 'products');