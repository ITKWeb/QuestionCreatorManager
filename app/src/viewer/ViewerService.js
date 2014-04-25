angular.module('app').factory('ViewerService', [
  function() {

    'use strict';

    var score = 0, currentQuestion;

    var QCM = {
      title: 'Mon beau QCM',
      nextAction: 'nextQuestion',//Display answer, KnowedNextQuestion
      questions: [
        {
          id: 0,
          title: 'titre question 1',
          score: 1,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Réponse 1',
              good: true,
              nextQuestion: 1
            }, {
              id: 1,
              title: 'Réponse 2',
              good: false,
              nextQuestion: 1
            }
          ] 
        }
      ]
    };

    return { 

      getTitle: function() {
        return QCM.title;
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
            if(goodAnswer !== undefined && optAnswers.id === goodAnswer.id) {
              score = score + currentQuestion.score;
            }
          }
          if(QCM.nextAction === 'nextQuestion') {
            currentQuestion = QCM.questions[currentQuestion.id+1];
          }
        } else {
          currentQuestion = QCM.questions[0];
        }
        return currentQuestion;
      }

    };

  }
]);