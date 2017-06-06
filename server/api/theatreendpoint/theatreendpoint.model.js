'use strict';

import mongoose from 'mongoose';

var TheatreendpointSchema = new mongoose.Schema({
  theatrename: String,
    location: String,
    showtime: Array
  });

export default mongoose.model('Theatreendpoint', TheatreendpointSchema);
