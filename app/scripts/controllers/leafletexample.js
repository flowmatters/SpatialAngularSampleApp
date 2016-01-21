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
            url: 'http://129.206.228.72/cached/osm?',
            type: 'wms',
            layerParams:{
              version: '1.1.1',
              format: 'image/png',
              layers:'osm_auto:all'
            }
          },
        },
        overlays:{
          aWMS:{
            // http://dapds00.nci.org.au/thredds/wms/ub8/global/nc/1d/actual/Stot/20150920_Stot_daily.nc?service=WMS&version=1.3.0&request=GetCapabilities
            name: 'Some Model Results',
            type: 'wms',
            visible: true,
            url: 'http://dapds00.nci.org.au/thredds/wms/ub8/global/nc/1d/actual/Stot/20150920_Stot_daily.nc?',
            doRefresh: true,
            layerParams: {
              layers: 'Stot_daily',
              time:'2015-09-20',
              format: 'image/png',
              transparent: true,
              logscale:false,
              styles:'boxfill/rainbow',
              numcolorbands:50,
              colorscalerange:'0,1000',
              belowmincolor:'extend',abovemaxcolor:'extend'
            }

          }
        }
      }
    });
  });
