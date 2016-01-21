'use strict';

/**
 * @ngdoc function
 * @name spatialAngularSampleAppApp.controller:LeafletexampleCtrl
 * @description
 * # LeafletexampleCtrl
 * Controller of the spatialAngularSampleAppApp
 */
angular.module('spatialAngularSampleAppApp')
  .controller('LeafletexampleCtrl', function ($scope) {

    angular.extend($scope,{
      defaults:{
        crs: L.CRS.EPSG4326
      },
      mapCentre:{
            lat: -33.85,
            lng: 151.21,
            zoom: 5
      },
      layers:{
        baselayers:{
          osm: {
            name: 'OpenStreetMap',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            type: 'xyz'
          },
        },
        overlays:{

        }
      }
    });
  });
