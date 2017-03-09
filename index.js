/**
 * Created by Syed Afzal on 3/1/2017.
 */
//console.log($("h1").attr("ng-reply"));
var app = angular.module('myApp', []);
app.controller("mainController", function($scope){
	$scope.name = "Afzal";
	$scope.address = "Hasan"

	$scope.ab = function() {
		return 2-1;
	}
	console.log($scope);
});