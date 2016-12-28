'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImgSchema = new Schema({
  name: String,
  festId: String,
  phoneNumber: String,
  question: String,
  q1: String,
  q2: String,
  q3: String,
  q4: String,
  q5: String,
  ip: String
});

module.exports = mongoose.model('Img', ImgSchema);
