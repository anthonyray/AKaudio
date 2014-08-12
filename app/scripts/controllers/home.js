'use strict';

/**
 * @ngdoc function
 * @name akaudioApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the akaudioApp
 */
angular.module('akaudioApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
