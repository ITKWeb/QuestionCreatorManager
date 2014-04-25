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

});