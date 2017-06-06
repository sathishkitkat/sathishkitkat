'use strict';

import mongoose from 'mongoose';

var PaymentendpointSchema = new mongoose.Schema({
  uname: String,
  contact: String,
  mailid: String,
  moviename: String,
  tname: String,
  date: String,
  time: String,
  seatno: Array,
  cityname: String,
  amount: String,
  cardno: String,
  cvvno: String
});

export default mongoose.model('Paymentendpoint', PaymentendpointSchema);
