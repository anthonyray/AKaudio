'use strict';

/**
 * @ngdoc overview
 * @name akaudioApp
 * @description
 * # akaudioApp
 *
 * Main module of the application.
 */
angular
  .module('akaudioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
