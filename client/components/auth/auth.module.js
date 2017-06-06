'use strict';

angular.module('ticketbookingApp.auth', ['ticketbookingApp.constants', 'ticketbookingApp.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
