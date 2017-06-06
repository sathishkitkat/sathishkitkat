'use strict';

import mongoose from 'mongoose';

var ShowtimeendpointSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Showtimeendpoint', ShowtimeendpointSchema);
