angular.module('app').factory('ViewerService', [
  '$routeParams', 'DataService', 'MultipleService', 'SimpleService',
  function($routeParams, dataService, multipleService, simpleService) {

    'use strict';

    var score = 0, 
      currentQuestion,
      returnedAnswer = false;

    var QCM = function QCM() {
      return dataService.getQCM($routeParams.qcm);
    };

    return { 

      getTitle: function() {
        return QCM().title;
      },
      getNextAction: function() {
        return QCM().nextAction;
      },
      getNextQuestion: function(optAnswers) {
        if(optAnswers !== undefined) {
          if(currentQuestion.multiple === true && _.isArray(optAnswers) === true && returnedAnswer === false) {
            score = score + multipleService.checkScore(currentQuestion, optAnswers);
          } else if(currentQuestion.multiple === false && _.isNumber(optAnswers) && returnedAnswer === false) {
            score = score + simpleService.checkScore(currentQuestion, optAnswers);
          } else if(returnedAnswer === false) {
            throw 'Bad argument in ViewerService.getNextQuestion() want multiple=' + currentQuestion.multiple + ' and has ' + optAnswers;
          }
          if(QCM().nextAction === 'nextQuestion') {
            currentQuestion = QCM().questions[currentQuestion.id+1];
          } else if(QCM().nextAction === 'displayAnswer') {
            if(returnedAnswer === false) {
              returnedAnswer = true;
              return currentQuestion.answers;
            } else {
              returnedAnswer = false;
              currentQuestion = QCM().questions[currentQuestion.id+1];
            }
          }
        } else {
          currentQuestion = QCM().questions[0];
        }
        return currentQuestion;
      },
      getScore: function() {
        return score;
      }

    };

  }
]);