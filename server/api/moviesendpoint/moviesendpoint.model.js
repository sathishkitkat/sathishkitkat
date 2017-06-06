'use strict';

import mongoose from 'mongoose';

var MoviesendpointSchema = new mongoose.Schema({
    poster:String,
    title: String,
    overview:String,
    Avg:String

});

export default mongoose.model('Moviesendpoint', MoviesendpointSchema);
