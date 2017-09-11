'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FaqSchema = new Schema({
    title: String,
    type: { type: String, required: true },
    details: { type: String },
    details_url: { type: String, required: true },
});

module.exports = mongoose.model('Faq', FaqSchema, 'faq');