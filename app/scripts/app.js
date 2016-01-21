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
    'leaflet-directive'
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
      .otherwise({
        redirectTo: '/'
      });
  });
