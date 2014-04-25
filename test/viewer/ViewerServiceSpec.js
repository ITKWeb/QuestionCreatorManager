describe('Testing viewer/ViewerService', function() {

  'use strict';

  beforeEach(module('app'));

  it('should return first question if getNextQuestion called with no arg', inject(function(ViewerService) {
    expect(ViewerService.getNextQuestion().id).toBe(0);
  }));

});