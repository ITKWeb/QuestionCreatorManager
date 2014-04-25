angular.module('app').controller('ViewerCtrl', [
  '$scope', 'ViewerService',
  function($scope, viewerService) {

    'use strict';

    $scope.hello = viewerService.getTitle();

  }
]);