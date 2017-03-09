var app = angular.module('my', ['ngMessages','ngResource','ngRoute']);


app.config(function($routeProvider){
	console.log("cinfig init");

	$routeProvider

	.when("/", {
		templateUrl : "pages/hello.html",
		controller : "myController"
	})

	.when("/second/:num", {
        templateUrl: "pages/page1.html",
		controller : "myController2"
	})

	.when("/second", {
		templateUrl: "pages/page1.html",
		controller : "myController2"
	})

		.when("/third",{
            templateUrl:"pages/third.html",
            controller : "myController3"
		})

});

app.service('meriService', function () {
	// var self = this;
	this.name = "Syed Shaheer Hasan";

	this.nameLength = function () {
		return this.name.length;
    }
});

// app.factory('someFactory', function(){
//
// 	var _data = {
// 		name: 'some name'
// 	}
//
// 	return {
// 		_data: _data
// 	}
//
// })



app.controller("myController", function($scope, $log, $filter,$resource, meriService){
	$log.name="afzal";
	$scope.name = meriService.name;
		$log.log(meriService.name);
	$log.log(meriService.nameLength());


    $scope.$watch('name', function () {
        meriService.name = $scope.name;
    });


	console.log($scope);
	$scope.handle = "";

	$scope.characters = 5;

	$scope.rulenames = [
	{rulename : "This is rule number 1"},
	{rulename : "This is rule number 2"},
	{rulename : "This is rule number 3"}
	];


	$scope.$watch("handle",  function(oldValue,newValue){
		$log.info("Changed!");
		$log.log("oldValue : " +oldValue);
		$log.log("newValue : "+newValue);
	});

	$scope.alertFunction = function(){
		alert("You clicke me");
	};

});


app.controller("myController2", function($scope, $log, $filter,$resource, $routeParams, meriService){
	$log.name="Shahnawaz";
	$scope.name = meriService.name;


    $scope.$watch('name', function () {
         meriService.name = $scope.name;
	});

	$scope.num = $routeParams.num || 2;

	console.log($scope);
	$scope.handle = "";

	$scope.characters = 5;

	$scope.rulenames = [
	{rulename : "This is rule number 1"},
	{rulename : "This is rule number 2"},
	{rulename : "This is rule number 3"}
	];


	$scope.$watch("handle",  function(oldValue,newValue){
		$log.info("Changed!");
		$log.log("oldValue : " +oldValue);
		$log.log("newValue : "+newValue);
	});

	$scope.alertFunction = function(){
		alert("You clicke me");
	};

});

app.controller("myController3", function($scope, $log, $filter,$resource, $routeParams){

    $scope.num = $routeParams.num || 2;

    console.log($scope);
    $scope.handle = "";

    $scope.characters = 5;

    $scope.rulenames = [
        {rulename : "This is rule number 1"},
        {rulename : "This is rule number 2"},
        {rulename : "This is rule number 3"}
    ];


    $scope.$watch("handle",  function(oldValue,newValue){
        $log.info("Changed!");
        $log.log("oldValue : " +oldValue);
        $log.log("newValue : "+newValue);
    });

    $scope.alertFunction = function(){
        alert("You clicke me");
    };

});

// window.addEventListener('hashchange', function(){
// 	if(window.location.hash == "#Shane");
// 	{
// 		console.log(window.location.hash == "#Shane");
// 	}
// });