'use strict';

var app = require('../..');
import request from 'supertest';

var newShowtimeendpoint;

describe('Showtimeendpoint API:', function() {

  describe('GET /api/showtimeendpoints', function() {
    var showtimeendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/showtimeendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          showtimeendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(showtimeendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/showtimeendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/showtimeendpoints')
        .send({
          name: 'New Showtimeendpoint',
          info: 'This is the brand new showtimeendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newShowtimeendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created showtimeendpoint', function() {
      expect(newShowtimeendpoint.name).to.equal('New Showtimeendpoint');
      expect(newShowtimeendpoint.info).to.equal('This is the brand new showtimeendpoint!!!');
    });

  });

  describe('GET /api/showtimeendpoints/:id', function() {
    var showtimeendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/showtimeendpoints/' + newShowtimeendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          showtimeendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      showtimeendpoint = {};
    });

    it('should respond with the requested showtimeendpoint', function() {
      expect(showtimeendpoint.name).to.equal('New Showtimeendpoint');
      expect(showtimeendpoint.info).to.equal('This is the brand new showtimeendpoint!!!');
    });

  });

  describe('PUT /api/showtimeendpoints/:id', function() {
    var updatedShowtimeendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/showtimeendpoints/' + newShowtimeendpoint._id)
        .send({
          name: 'Updated Showtimeendpoint',
          info: 'This is the updated showtimeendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedShowtimeendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedShowtimeendpoint = {};
    });

    it('should respond with the updated showtimeendpoint', function() {
      expect(updatedShowtimeendpoint.name).to.equal('Updated Showtimeendpoint');
      expect(updatedShowtimeendpoint.info).to.equal('This is the updated showtimeendpoint!!!');
    });

  });

  describe('DELETE /api/showtimeendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/showtimeendpoints/' + newShowtimeendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when showtimeendpoint does not exist', function(done) {
      request(app)
        .delete('/api/showtimeendpoints/' + newShowtimeendpoint._id)
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
