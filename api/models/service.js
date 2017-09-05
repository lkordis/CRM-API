'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ServiceSchema = new Schema({
    title: String,
    type: { type: String, required: true },
    details: String,
    details_url: { type: String, required: true },
});

module.exports = mongoose.model('Services', ServiceSchema, 'services');