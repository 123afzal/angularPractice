/**
 * Created by Syed Afzal on 3/1/2017.
 */
//console.log($("h1").attr("ng-reply"));
var app = angular.module('myApp', []);
app.controller("mainController", function($log){
	$log.log("My name is Afzal");
	$log.warning("This is warning");
	$log.debug("Some thing to debug");
	$log.error("this is an error");
});