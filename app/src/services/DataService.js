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

    var QCMItk = {
      title: 'ITK',
      nextAction: 'nextQuestion',//displayAnswer, knowedNextQuestion
      questions: [
        {
          id: 0,
          title: 'Quand a été créée ITK',
          score: 1,
          multiple: false,
          urlImage: 'http://itkweb.com/wp-content/uploads/logos/logo_itk.png',
          answers: [
            {
              id: 0,
              title: '2000',
              good: false
            }, {
              id: 1,
              title: '2003',
              good: true
            }, {
              id: 2,
              title: '2005',
              good: false
            }
          ] 
        }, {
          id: 1,
          title: 'ITK Protect est plus connus sous le nom',
          score: 1,
          multiple: true,
          urlImage: 'http://itkweb.com/wp-content/uploads/logos/logo_bulle_itk-protect.png',
          answers: [
            {
              id: 0,
              title: 'Movida',
              good: true
            }, {
              id: 1,
              title: '4P',
              good: true
            }, {
              id: 2,
              title: 'Bayer\'s solution',
              good: false
            }
          ] 
        }, {
          id: 2,
          title: 'ITK est présent sur',
          score: 1,
          multiple: true,
          urlImage: 'http://itkweb.com/wp-content/uploads/logos/logo_itk.png',
          answers: [
            {
              id: 0,
              title: 'Internet',
              good: true
            }, {
              id: 1,
              title: 'Facebook',
              good: true
            }, {
              id: 2,
              title: 'Twitter',
              good: true
            }, {
              id: 3,
              title: 'ScoopIt',
              good: false
            }, {
              id: 4,
              title: 'Viadéo',
              good: true
            }
          ] 
        }, {
          id: 3,
          title: 'Qu\'est-ce que la sénescence',
          score: 1,
          multiple: false,
          urlImage: 'http://media.melty.fr/article-705848-ajust_930/je-pense-que-nous-voyons-ce-qui-parait-etre.jpg',
          answers: [
            {
              id: 0,
              title: 'ça ne veut rien dire',
              good: false
            }, {
              id: 1,
              title: 'c\'est lorsqu\'on gagne une partie de pétanque 0 à 13',
              good: false
            }, {
              id: 2,
              title: 'un truc qu\'on a fait en h-day vismavie d\'agros (ou pas)',
              good: true
            }
          ] 
        }, {
          id: 4,
          title: 'Qu\'est-ce que le H-Day',
          score: 1,
          multiple: true,
          urlImage: 'http://itkweb.github.io/site-h-day/images/favicon.png',
          answers: [
            {
              id: 0,
              title: 'Un truc trop cool.',
              good: true
            }, {
              id: 1,
              title: 'Un truc où on apprend de nouvelles choses.',
              good: true
            }, {
              id: 2,
              title: 'Un truc où on peut faire des choses de tous les jours.',
              good: false
            }
          ] 
        }, {
          id: 5,
          title: 'Cap alpha est',
          score: 1,
          multiple: false,
          urlImage: 'http://t3.gstatic.com/images?q=tbn:ANd9GcT8Jv8Ddh9qaHeas2sg99nuy0Zs8-WwpBE08Fukb2MHlLDVycRxQQyl1UKu',
          answers: [
            {
              id: 0,
              title: 'Une direction à suivre',
              good: false
            }, {
              id: 1,
              title: 'Un restaurant 3 étoiles',
              good: false
            }, {
              id: 2,
              title: 'Une pépinière qui accepte seulement les entreprises de moins de 5ans',
              good: false
            }, {
              id: 3,
              title: 'Un endroit où on fait des apéros',
              good: true
            }
          ] 
        }, {
          id: 6,
          title: 'Un PO est',
          score: 1,
          multiple: false,
          urlImage: 'http://www.ultra-book.com/users_2/f/r/francoisgeorget/img_cms/images/pot_fleur.jpg',
          answers: [
            {
              id: 0,
              title: 'Un truc où on met une plante',
              good: false
            }, {
              id: 1,
              title: 'Un chef de projet',
              good: false
            }, {
              id: 2,
              title: 'Quelqu\'un qui parle aux utilisateurs',
              good: true
            }
          ] 
        }
      ]
    };

    var QCMs = {simple: QCMSimple, multiple: QCMMultiple, displayAnswer: QCMDisplayAnswer, knowedNextQuestion: QCMKnowedNextQuestion, itk: QCMItk};

    return {

      getQCM: function(name) {
        return QCMs[name];
      }

    };

  }
]);