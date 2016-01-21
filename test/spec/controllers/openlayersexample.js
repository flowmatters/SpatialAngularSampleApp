'use strict';

describe('Controller: OpenlayersexampleCtrl', function () {

  // load the controller's module
  beforeEach(module('spatialAngularSampleAppApp'));

  var OpenlayersexampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpenlayersexampleCtrl = $controller('OpenlayersexampleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpenlayersexampleCtrl.awesomeThings.length).toBe(3);
  });
});
