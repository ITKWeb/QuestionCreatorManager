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
      getNextQuestion: function(optAnswers) {
        if(optAnswers !== undefined) {
          if(_.isArray(optAnswers) === true) {
            var goodAnswers = _.filter(currentQuestion.answers, function(answer) {
              return answer.good === true;
            });
            var hasWin = _.every(optAnswers, function(answer) {
              return _.find(currentQuestion.answers, function(goodAnswer) {
                return answer.id === goodAnswer.id;
              });
            });
            if(hasWin === true) {
              score = score + currentQuestion.score;
            }
          } else {
            var goodAnswer = _.find(currentQuestion.answers, function(answer) {
              return answer.good === true;
            });
            if(goodAnswer !== undefined && optAnswers === goodAnswer.id) {
              score = score + currentQuestion.score;
            }
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