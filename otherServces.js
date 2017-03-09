/**
 * Created by Syed Afzal on 3/1/2017.
 */
//console.log($("h1").attr("ng-reply"));
var app = angular.module('my', ['ngMessages','ngResource']);
app.controller("mainController", function($scope, $log, $filter,$resource){
	console.log($resource);
	console.log($filter);
	// $scope.name = "maths";
	// $scope.namebige = $filter('uppercase')($scope.name);
	// $log.info($scope.name);
	// $log.info($scope.namebige);
	//$log.log($resource);
	// $log.log("My name is Afzal");
	// $log.warn("This is warning");
	// $log.debug("Some thing to debug");
	// $log.error("this is an error");
});