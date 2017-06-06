/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/showtimeendpoints              ->  index
 * POST    /api/showtimeendpoints              ->  create
 * GET     /api/showtimeendpoints/:id          ->  show
 * PUT     /api/showtimeendpoints/:id          ->  update
 * DELETE  /api/showtimeendpoints/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Showtimeendpoint from './showtimeendpoint.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Showtimeendpoints
export function index(req, res) {
  return Showtimeendpoint.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Showtimeendpoint from the DB
export function show(req, res) {
  return Showtimeendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Showtimeendpoint in the DB
export function create(req, res) {
  return Showtimeendpoint.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Showtimeendpoint in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Showtimeendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Showtimeendpoint from the DB
export function destroy(req, res) {
  return Showtimeendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
