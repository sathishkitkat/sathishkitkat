'use strict';

var app = require('../..');
import request from 'supertest';

var newMapmovieendpoint;

describe('Mapmovieendpoint API:', function() {

  describe('GET /api/mapmovieendpoints', function() {
    var mapmovieendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/mapmovieendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mapmovieendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(mapmovieendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/mapmovieendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/mapmovieendpoints')
        .send({
          name: 'New Mapmovieendpoint',
          info: 'This is the brand new mapmovieendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMapmovieendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created mapmovieendpoint', function() {
      expect(newMapmovieendpoint.name).to.equal('New Mapmovieendpoint');
      expect(newMapmovieendpoint.info).to.equal('This is the brand new mapmovieendpoint!!!');
    });

  });

  describe('GET /api/mapmovieendpoints/:id', function() {
    var mapmovieendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/mapmovieendpoints/' + newMapmovieendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mapmovieendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      mapmovieendpoint = {};
    });

    it('should respond with the requested mapmovieendpoint', function() {
      expect(mapmovieendpoint.name).to.equal('New Mapmovieendpoint');
      expect(mapmovieendpoint.info).to.equal('This is the brand new mapmovieendpoint!!!');
    });

  });

  describe('PUT /api/mapmovieendpoints/:id', function() {
    var updatedMapmovieendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/mapmovieendpoints/' + newMapmovieendpoint._id)
        .send({
          name: 'Updated Mapmovieendpoint',
          info: 'This is the updated mapmovieendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMapmovieendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMapmovieendpoint = {};
    });

    it('should respond with the updated mapmovieendpoint', function() {
      expect(updatedMapmovieendpoint.name).to.equal('Updated Mapmovieendpoint');
      expect(updatedMapmovieendpoint.info).to.equal('This is the updated mapmovieendpoint!!!');
    });

  });

  describe('DELETE /api/mapmovieendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/mapmovieendpoints/' + newMapmovieendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when mapmovieendpoint does not exist', function(done) {
      request(app)
        .delete('/api/mapmovieendpoints/' + newMapmovieendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
