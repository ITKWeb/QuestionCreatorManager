angular.module('app').factory('ViewerService', [
  'DataService', '$routeParams',
  function(dataService, $routeParams) {

    'use strict';

    var score = 0, 
      currentQuestion;

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
          if(currentQuestion.multiple === true && _.isArray(optAnswers) === true) {
            var goodAnswers = _.filter(currentQuestion.answers, function(answer) {
              return answer.good === true;
            });
            var hasWin = _.every(optAnswers, function(answer) {
              return _.find(currentQuestion.answers, function(goodAnswer) {
                return answer === goodAnswer.id;
              });
            });
            if(hasWin === true) {
              score = score + currentQuestion.score;
            }
          } else if(currentQuestion.multiple === false && _.isNumber(optAnswers)) {
            var goodAnswer = _.find(currentQuestion.answers, function(answer) {
              return answer.good === true;
            });
            if(goodAnswer !== undefined && optAnswers === goodAnswer.id) {
              score = score + currentQuestion.score;
            }
          } else {
            throw 'Bad argument in ViewerService.getNextQuestion want multiple=' + currentQuestion.multiple + ' and has ' + optAnswers;
          }
          if(QCM().nextAction === 'nextQuestion') {
            currentQuestion = QCM().questions[currentQuestion.id+1];
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