angular.module('app').factory('SimpleService', [
  function() {

    'use strict';

    return {
      checkScore: function(currentQuestion, optAnswers) {
        var goodAnswer = _.find(currentQuestion.answers, function(answer) {
          return answer.good === true;
        });
        if(goodAnswer !== undefined && optAnswers === goodAnswer.id) {
          return currentQuestion.score;
        }
        return 0;
      }
    };
  }
]);
