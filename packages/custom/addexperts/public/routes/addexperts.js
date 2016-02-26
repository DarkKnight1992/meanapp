'use strict';
 
angular.module('mean.addexperts').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.state('add experts page',{
			url:'/addexperts/admin',
			templateUrl:'addexperts/views/index.html'
		});
	}
]);
