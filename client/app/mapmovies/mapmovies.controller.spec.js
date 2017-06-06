'use strict';

describe('Component: MapmoviesComponent', function () {

  // load the controller's module
  beforeEach(module('ticketbookingApp'));

  var MapmoviesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MapmoviesComponent = $componentController('mapmovies', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
