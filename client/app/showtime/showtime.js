'use strict';

angular.module('ticketbookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/showtime', {
        template: '<showtime></showtime>'
      });
  });
