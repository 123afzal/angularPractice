var app = angular.module('my', ['ngMessages','ngResource','ngRoute']);
// ed sharee shape of you

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

app.directive('searchResult', function () {
	return{
		restrict:'AE',
		template : "<a href='#' class='list-group-item'>"+
        "<h4 class='list-group-item-heading'>Job title</h4>" +
        "<p class='list-group-item-text'>internee in Codenvio</p>"+
        "</a>",

		replace:true
	}
});


app.controller("myController", function($scope, $log, $filter,$resource, meriService){


});


app.controller("myController2", function($scope, $log, $filter,$resource, $routeParams, meriService){

});

app.controller("myController3", function($scope, $log, $filter,$resource, $routeParams){


});

// window.addEventListener('hashchange', function(){
// 	if(window.location.hash == "#Shane");
// 	{
// 		console.log(window.location.hash == "#Shane");
// 	}
// });