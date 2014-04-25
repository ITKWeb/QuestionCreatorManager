angular.module('app', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    'use strict';

    $routeProvider
      .when('/:qcm', {
        templateUrl: 'app/src/viewer/viewer.tpl.html',
        controller: 'ViewerCtrl'
      })
      .when('/', {
        redirectTo: '/simple'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);