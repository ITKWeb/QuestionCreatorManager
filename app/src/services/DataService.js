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

    var QCMKnowedNextQuestion = {
      title: 'Git Genious',
      nextAction: 'knowedNextQuestion',//displayAnswer, knowedNextQuestion
      questions: [
        {
          id: 0,
          title: 'Voulez-vous ?',
          score: 0,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Envoyer du code ?',
              good: true,
              nextQuestion: 1
            }, {
              id: 1,
              title: 'Récupérer du code ?',
              good: true,
              nextQuestion: 2
            }, {
              id: 2,
              title: 'Autre ?',
              good: true,
              nextQuestion: 3
            }
          ] 
        }, {
          id: 1,
          title: 'Avez-vous fait `git add .` ?',
          score: 0,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Oui',
              good: true,
              nextQuestion: 4
            }, {
              id: 1,
              title: 'Non',
              good: true,
              nextQuestion: 1
            }
          ] 
        }, {
          id: 2,
          title: 'Avez-vous fait `git pull --rebase"` ?',
          score: 0,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Oui',
              good: true,
              nextQuestion: 2
            }, {
              id: 1,
              title: 'Non',
              good: true,
              nextQuestion: 2
            }
          ] 
        }, {
          id: 3,
          title: 'Google est ton ami !',
          score: 0,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [] 
        }, {
          id: 4,
          title: 'Avez-vous fait `git commit -m "mon commentaire"` ?',
          score: 0,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Oui',
              good: true,
              nextQuestion: 5
            }, {
              id: 1,
              title: 'Non',
              good: true,
              nextQuestion: 2
            }
          ] 
        }, {
          id: 5,
          title: 'Avez-vous fait `git push` ?',
          score: 0,
          multiple: false,
          urlImage: 'https://avatars3.githubusercontent.com/u/1492516?s=140',
          answers: [
            {
              id: 0,
              title: 'Oui',
              good: true,
              nextQuestion: 5
            }, {
              id: 1,
              title: 'Non',
              good: true,
              nextQuestion: 5
            }
          ] 
        }
      ]
    };

    var QCMs = {simple: QCMSimple, multiple: QCMMultiple, displayAnswer: QCMDisplayAnswer, knowedNextQuestion: QCMKnowedNextQuestion};

    return {

      getQCM: function(name) {
        return QCMs[name];
      }

    };

  }
]);