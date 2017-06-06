'use strict';

import mongoose from 'mongoose';

var MapmovieendpointSchema = new mongoose.Schema({
  poster: String,
  title: String,
 tname: String,
 location:String,
 showtime: Array,
 formdate: Array


});

export default mongoose.model('Mapmovieendpoint', MapmovieendpointSchema);
