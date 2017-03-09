var myApp = angular.module('myApp', []);

myApp.controller("myController", function($scope,$filter,$timeout){
	console.log($scope);

	$scope.handle='';

	$scope.abc="harami";

	$scope.lowercasehan = function(){
		return $filter('lowercase')($scope.handle);
	};
});