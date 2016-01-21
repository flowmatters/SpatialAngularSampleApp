'use strict';

/**
 * @ngdoc overview
 * @name spatialAngularSampleAppApp
 * @description
 * # spatialAngularSampleAppApp
 *
 * Main module of the application.
 */
angular
  .module('spatialAngularSampleAppApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'leaflet-directive',
    'openlayers-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/leaflet', {
        templateUrl: 'views/leafletexample.html',
        controller: 'LeafletexampleCtrl',
        controllerAs: 'leaflet'
      })
      .when('/openlayers', {
        templateUrl: 'views/openlayersexample.html',
        controller: 'OpenlayersexampleCtrl',
        controllerAs: 'openlayers'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
