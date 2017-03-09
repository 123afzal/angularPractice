var myApp = angular.module('myApp', []);

myApp.controller("myController", function($scope,$filter,$timeout){
	console.log($scope);

	$scope.handle='';

	$scope.lowercasehan = function(){
		return $filter('lowercase')($scope.handle);
	};

	$scope.$watch('handle', function(newValue, oldValue) {
		console.info("Change");
		console.log("oldValue : "+oldValue);
		console.log("newValue : " +newValue );
		});

	$timeout(function() {
		$scope.handle = "Handle is changed";
	}
	, 3000);
});