angular.module('app').factory('DataService', [
  function() {

    'use strict';
    
    var QCMSimple = {
      title: 'Mon beau QCM',
      nextAction: 'nextQuestion',//displayAnswer, knowedNextQuestion
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
        }, {
          id: 1,
          title: 'titre question 2',
          score: 1,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Réponse 1',
              good: false
            }, {
              id: 1,
              title: 'Réponse 2',
              good: true
            }
          ] 
        }
      ]
    };

    var QCMMultiple = {
      title: 'Mon beau QCM multiple',
      nextAction: 'nextQuestion',//displayAnswer, knowedNextQuestion
      questions: [
        {
          id: 0,
          title: 'titre question 1',
          score: 1,
          multiple: true,
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
              good: true,
              nextQuestion: 1
            }, {
              id: 2,
              title: 'Réponse 3',
              good: false,
              nextQuestion: 1
            }
          ] 
        }, {
          id: 1,
          title: 'titre question 2',
          score: 1,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Réponse 1',
              good: false
            }, {
              id: 1,
              title: 'Réponse 2',
              good: true
            }
          ] 
        }
      ]
    };

    var QCMDisplayAnswer = {
      title: 'Mon beau QCM display answer',
      nextAction: 'displayAnswer',//displayAnswer, knowedNextQuestion
      questions: [
        {
          id: 0,
          title: 'titre question 1',
          score: 1,
          multiple: true,
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
              good: true,
              nextQuestion: 1
            }, {
              id: 2,
              title: 'Réponse 3',
              good: false,
              nextQuestion: 1
            }
          ] 
        }, {
          id: 1,
          title: 'titre question 2',
          score: 1,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Réponse 1',
              good: false
            }, {
              id: 1,
              title: 'Réponse 2',
              good: true
            }
          ] 
        }
      ]
    };

    var QCMs = {simple: QCMSimple, multiple: QCMMultiple, displayAnswer: QCMDisplayAnswer};

    return {

      getQCM: function(name) {
        return QCMs[name];
      }

    };

  }
]);