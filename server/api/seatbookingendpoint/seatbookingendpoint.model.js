'use strict';

import mongoose from 'mongoose';

var SeatbookingendpointSchema = new mongoose.Schema({
  title: String,
  Theatre:String,
  city: String,
  date: String,
  showtime:String,
  amount: String,
seatnumber: Array

});

export default mongoose.model('Seatbookingendpoint', SeatbookingendpointSchema);
