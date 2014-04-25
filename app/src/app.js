angular.module('app', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    'use strict';

    $routeProvider
      .when('/', {
        templateUrl: 'app/src/viewer/viewer.tpl.html',
        controller: 'ViewerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);