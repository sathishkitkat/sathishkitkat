'use strict';

angular.module('ticketbookingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mapmovies', {
        template: '<mapmovies></mapmovies>'
      });
  });
