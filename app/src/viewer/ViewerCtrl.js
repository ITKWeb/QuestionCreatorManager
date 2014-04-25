angular.module('app').controller('ViewerCtrl', [
  '$scope', 'ViewerService',
  function($scope, viewerService) {
    'use strict';

    $scope.qcmtitle = viewerService.getTitle();

    var nextAction = 'nextQuestion'; //FIXME : replace with a service call

    var nextQuestion = viewerService.getNextQuestion();

    $scope.questionimageurl = nextQuestion.urlImage;

    $scope.questiontitle = nextQuestion.title;

    $scope.answerType = 'radio';
    if (nextQuestion.multiple) {
      $scope.answerType = 'checkbox';  
    }
    
    $scope.buttonLabel = 'NextQuestion...';
    if (nextAction === 'nextQuestion') {
      $scope.buttonLabel = 'Next Question';  
    } else if(nextAction === 'displayAnswer'){
      $scope.buttonLabel = 'Display answer';  
    }

    


    

    $scope.answers = nextQuestion.answers;

  }
]);