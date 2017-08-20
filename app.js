var app=angular.module("App",['main','ngRoute','angularModalService','ngCookies']);

app.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider,$cookieStore) {
  $routeProvider.
	when("/", {templateUrl: "/login.html", controller: "mainController"}).
	when("/success",{templateUrl: "/success.html",controller:"mainController"}).
	when("/faliure",{templateUrl: "/faliure.html",controller:"mainController"}).
	otherwise({redirectTo: '/'});
}]);
