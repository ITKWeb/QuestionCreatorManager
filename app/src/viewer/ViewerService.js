angular.module('app').factory('ViewerService', [
  function() {

    'use strict';

    var QCM = {
      title: 'Mon beau QCM',
      nextAction: 'nextQuestion'//Display answer, KnowedNextQuestion
    };

    var questions = [
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
          },
          {
            id: 1,
            title: 'Réponse 2',
            good: false,
            nextQuestion: 1
          }
        ] 
      }
    ];

    QCM.questions = questions;

    return { 

      getTitle: function() {
        return QCM.title;
      },
      getNextQuestion: function(optAnswers) {
        return questions[0];
      }

    };

  }
]);