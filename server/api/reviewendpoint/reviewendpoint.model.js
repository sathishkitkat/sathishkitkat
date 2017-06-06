'use strict';

import mongoose from 'mongoose';

var ReviewendpointSchema = new mongoose.Schema({
  username: String,
  movietitle: String,
  comment: String,
  rating: String
});

export default mongoose.model('Reviewendpoint', ReviewendpointSchema);
