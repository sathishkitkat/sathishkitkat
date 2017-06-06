/**
 * Showtimeendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Showtimeendpoint from './showtimeendpoint.model';
var ShowtimeendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ShowtimeendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Showtimeendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ShowtimeendpointEvents.emit(event + ':' + doc._id, doc);
    ShowtimeendpointEvents.emit(event, doc);
  }
}

export default ShowtimeendpointEvents;
