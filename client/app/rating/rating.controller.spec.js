'use strict';

describe('Component: RatingComponent', function () {

  // load the controller's module
  beforeEach(module('ticketbookingApp'));

  var RatingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RatingComponent = $componentController('rating', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
