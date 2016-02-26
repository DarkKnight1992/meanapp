'use strict';

/* jshint -W098 */
angular.module('mean.addexperts').controller('ExpertsController', ['$scope', 'Global', 
  function($scope, Global) {
    $scope.global = Global;
    $scope.package = {
      name: 'addexperts'
    };
    $scope.addToExperts = function(){
    	console.log($scope.expertName);
    };
  }
]);
