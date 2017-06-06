'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var showtimeendpointCtrlStub = {
  index: 'showtimeendpointCtrl.index',
  show: 'showtimeendpointCtrl.show',
  create: 'showtimeendpointCtrl.create',
  update: 'showtimeendpointCtrl.update',
  destroy: 'showtimeendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var showtimeendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './showtimeendpoint.controller': showtimeendpointCtrlStub
});

describe('Showtimeendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(showtimeendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/showtimeendpoints', function() {

    it('should route to showtimeendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'showtimeendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/showtimeendpoints/:id', function() {

    it('should route to showtimeendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'showtimeendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/showtimeendpoints', function() {

    it('should route to showtimeendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'showtimeendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/showtimeendpoints/:id', function() {

    it('should route to showtimeendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'showtimeendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/showtimeendpoints/:id', function() {

    it('should route to showtimeendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'showtimeendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/showtimeendpoints/:id', function() {

    it('should route to showtimeendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'showtimeendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
