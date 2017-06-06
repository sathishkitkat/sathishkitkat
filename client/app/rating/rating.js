'use strict';

angular.module('ticketbookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rating', {
        template: '<rating></rating>'
      });
  });
