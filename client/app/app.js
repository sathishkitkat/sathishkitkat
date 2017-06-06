'use strict';

angular.module('ticketbookingApp', ['ticketbookingApp.auth', 'ticketbookingApp.admin',
    'ticketbookingApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'btford.socket-io', 'validation.match','ui.filters'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });
    // var minfo = $cookies.getObject('info');
    //         console.log(minfo);


    $locationProvider.html5Mode(true);
  });
