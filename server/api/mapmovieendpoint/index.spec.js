'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mapmovieendpointCtrlStub = {
  index: 'mapmovieendpointCtrl.index',
  show: 'mapmovieendpointCtrl.show',
  create: 'mapmovieendpointCtrl.create',
  update: 'mapmovieendpointCtrl.update',
  destroy: 'mapmovieendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mapmovieendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './mapmovieendpoint.controller': mapmovieendpointCtrlStub
});

describe('Mapmovieendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(mapmovieendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/mapmovieendpoints', function() {

    it('should route to mapmovieendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'mapmovieendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/mapmovieendpoints/:id', function() {

    it('should route to mapmovieendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'mapmovieendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/mapmovieendpoints', function() {

    it('should route to mapmovieendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'mapmovieendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/mapmovieendpoints/:id', function() {

    it('should route to mapmovieendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'mapmovieendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/mapmovieendpoints/:id', function() {

    it('should route to mapmovieendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'mapmovieendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/mapmovieendpoints/:id', function() {

    it('should route to mapmovieendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'mapmovieendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
