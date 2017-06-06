'use strict';

angular.module('ticketbookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/review', {
        template: '<review></review>'
      });
  });
