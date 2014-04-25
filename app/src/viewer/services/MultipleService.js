angular.module('app').factory('MultipleService', [
  function() {

    'use strict';

    return {
      checkScore: function(currentQuestion, optAnswers) {
        var goodAnswers = _.filter(currentQuestion.answers, function(answer) {
          return answer.good === true;
        });
        var hasWin = _.every(optAnswers, function(answer) {
          return _.find(currentQuestion.answers, function(goodAnswer) {
            return answer === goodAnswer.id;
          });
        });
        if(hasWin === true) {
          return currentQuestion.score;
        }
        return 0;
      }
    };
  }
]);
