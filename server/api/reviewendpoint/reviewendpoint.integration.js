'use strict';

var app = require('../..');
import request from 'supertest';

var newReviewendpoint;

describe('Reviewendpoint API:', function() {

  describe('GET /api/reviewendpoints', function() {
    var reviewendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/reviewendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          reviewendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(reviewendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/reviewendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/reviewendpoints')
        .send({
          name: 'New Reviewendpoint',
          info: 'This is the brand new reviewendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newReviewendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created reviewendpoint', function() {
      expect(newReviewendpoint.name).to.equal('New Reviewendpoint');
      expect(newReviewendpoint.info).to.equal('This is the brand new reviewendpoint!!!');
    });

  });

  describe('GET /api/reviewendpoints/:id', function() {
    var reviewendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/reviewendpoints/' + newReviewendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          reviewendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      reviewendpoint = {};
    });

    it('should respond with the requested reviewendpoint', function() {
      expect(reviewendpoint.name).to.equal('New Reviewendpoint');
      expect(reviewendpoint.info).to.equal('This is the brand new reviewendpoint!!!');
    });

  });

  describe('PUT /api/reviewendpoints/:id', function() {
    var updatedReviewendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/reviewendpoints/' + newReviewendpoint._id)
        .send({
          name: 'Updated Reviewendpoint',
          info: 'This is the updated reviewendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedReviewendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedReviewendpoint = {};
    });

    it('should respond with the updated reviewendpoint', function() {
      expect(updatedReviewendpoint.name).to.equal('Updated Reviewendpoint');
      expect(updatedReviewendpoint.info).to.equal('This is the updated reviewendpoint!!!');
    });

  });

  describe('DELETE /api/reviewendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/reviewendpoints/' + newReviewendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when reviewendpoint does not exist', function(done) {
      request(app)
        .delete('/api/reviewendpoints/' + newReviewendpoint._id)
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
