angular.module('app').controller('ViewerCtrl', [
  '$scope', 'ViewerService',
  function($scope, viewerService) {
    'use strict';


    var bindQuestion = function(nq, na){
      $scope.questionimageurl = nq.urlImage;

      $scope.questiontitle = nq.title;

      $scope.answerType = 'radio';
      if (nq.multiple) {
        $scope.answerType = 'checkbox';  
      }  
    
      $scope.buttonLabel = 'NextQuestion...';
      if (na === 'nextQuestion') {
        $scope.buttonLabel = 'Next Question';  
      } else if(na === 'displayAnswer'){
        $scope.buttonLabel = 'Display answer';  
      }

      // answers to be dispalyed
      $scope.answers = nq.answers; 
  

    };


    $scope.qcmtitle = viewerService.getTitle();

    //FIXME : replace with a service call
    var nextAction = viewerService.getNextAction();//'nextQuestion';//
    console.log('Action='+nextAction);

    var nextQuestion = viewerService.getNextQuestion();
    console.log(nextQuestion);

    bindQuestion(nextQuestion, nextAction);
    
    $scope.next = function(){
      viewerService.getNextQuestion(0);
    };

  }
]);