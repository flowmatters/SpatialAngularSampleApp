'use strict';

/**
 * @ngdoc function
 * @name spatialAngularSampleAppApp.controller:OpenlayersexampleCtrl
 * @description
 * # OpenlayersexampleCtrl
 * Controller of the spatialAngularSampleAppApp
 */
angular.module('spatialAngularSampleAppApp')
  .controller('OpenlayersexampleCtrl', function ($scope) {
    angular.extend($scope,{
      defaults:{
      },
      mapCentre:{
            lat: -33.85,
            lon: 151.21,
            zoom: 5,
            projection: 'EPSG:4326'
      }
    });
  });
