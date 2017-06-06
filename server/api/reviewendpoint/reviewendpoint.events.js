/**
 * Reviewendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Reviewendpoint from './reviewendpoint.model';
var ReviewendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ReviewendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Reviewendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ReviewendpointEvents.emit(event + ':' + doc._id, doc);
    ReviewendpointEvents.emit(event, doc);
  }
}

export default ReviewendpointEvents;
