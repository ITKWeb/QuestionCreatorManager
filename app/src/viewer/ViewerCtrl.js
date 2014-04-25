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

    $scope.showScore = false;

    var nextAction = viewerService.getNextAction();
    //console.log('Action='+nextAction);

    var nextQuestion = viewerService.getNextQuestion();
    //console.log(nextQuestion);

    bindQuestion(nextQuestion, nextAction);
    
    $scope.next = function(){
      console.log('click');

      if (nextQuestion.multiple === false){
        checkeds = checkeds[0] || -1;
      }

      nextQuestion = viewerService.getNextQuestion(checkeds);


      if (nextQuestion === undefined){
        console.log('this is the end');
        $scope.score = viewerService.getScore();
        $scope.showScore = true;

      }else{
        checkeds = [];

        bindQuestion(nextQuestion, nextAction);
      }
    };

    var checkeds = [];

    $scope.checked = function(id){
      console.log('check');
      console.log(id);

      if (nextQuestion.multiple === false){
        checkeds = [];
      }

      if(_.contains(checkeds, id) === true){
        checkeds = _.without(checkeds, id);
      }else{
        checkeds.push(id);
      }

    };

    $scope.restart = function(){
      location.reload();
    };



  }
]);