'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var reviewendpointCtrlStub = {
  index: 'reviewendpointCtrl.index',
  show: 'reviewendpointCtrl.show',
  create: 'reviewendpointCtrl.create',
  update: 'reviewendpointCtrl.update',
  destroy: 'reviewendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var reviewendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './reviewendpoint.controller': reviewendpointCtrlStub
});

describe('Reviewendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(reviewendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/reviewendpoints', function() {

    it('should route to reviewendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'reviewendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/reviewendpoints/:id', function() {

    it('should route to reviewendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'reviewendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/reviewendpoints', function() {

    it('should route to reviewendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'reviewendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/reviewendpoints/:id', function() {

    it('should route to reviewendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'reviewendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/reviewendpoints/:id', function() {

    it('should route to reviewendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'reviewendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/reviewendpoints/:id', function() {

    it('should route to reviewendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'reviewendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
