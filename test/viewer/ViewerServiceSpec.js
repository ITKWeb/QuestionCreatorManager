describe('Testing viewer/ViewerService', function() {

  'use strict';

  beforeEach(module('app'));

  describe('Simple case', function() {

    beforeEach(inject(function($routeParams) {
      $routeParams.qcm = 'simple';
    }));

    it('should return first question if getNextQuestion called with no arg', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
    }));

    it('should return next question', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
      expect(ViewerService.getNextQuestion(0).id).toBe(1);
    }));

    it('should increment score only on good answer', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
      expect(ViewerService.getNextQuestion(0).id).toBe(1);
      expect(ViewerService.getScore()).toBe(1);
    }));

  });

  describe('Multiple case', function() {

    beforeEach(inject(function($routeParams) {
      $routeParams.qcm = 'multiple';
    }));

    it('should return first question if getNextQuestion called with no arg', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
    }));

    it('should throw an error if arg of nextQuastion has not good', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
      expect(function() {
        ViewerService.getNextQuestion(0);
      }).toThrow();
    }));

    it('should return next question also with bad answer', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
      expect(ViewerService.getNextQuestion([]).id).toBe(1);
    }));

    it('should increment score only on good answer', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
      expect(ViewerService.getNextQuestion([0, 1]).id).toBe(1);
      expect(ViewerService.getScore()).toBe(1);
    }));

  });

  describe('Display answer case', function() {

    beforeEach(inject(function($routeParams) {
      $routeParams.qcm = 'displayAnswer';
    }));

    it('should return first question if getNextQuestion called with no arg', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
    }));

    it('should return answers on first getNextQuestion call', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
      var answers = ViewerService.getNextQuestion([]);
      expect(answers.length).toBe(3);
      expect(answers[0].title).toBe('Réponse 1');
    }));

    it('should return nextQuestion on second getNextQuestion call', inject(function(ViewerService) {
      expect(ViewerService.getNextQuestion().id).toBe(0);
      var answers = ViewerService.getNextQuestion([0, 1]);
      expect(ViewerService.getNextQuestion([0, 1]).id).toBe(1);
      expect(ViewerService.getScore()).toBe(1);
    }));

  });

});