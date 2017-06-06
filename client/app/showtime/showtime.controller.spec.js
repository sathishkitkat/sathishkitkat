'use strict';

describe('Component: ShowtimeComponent', function () {

  // load the controller's module
  beforeEach(module('ticketbookingApp'));

  var ShowtimeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ShowtimeComponent = $componentController('showtime', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
