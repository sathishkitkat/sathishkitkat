/**
 * Mapmovieendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Mapmovieendpoint from './mapmovieendpoint.model';
var MapmovieendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MapmovieendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Mapmovieendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MapmovieendpointEvents.emit(event + ':' + doc._id, doc);
    MapmovieendpointEvents.emit(event, doc);
  }
}

export default MapmovieendpointEvents;
