var app=angular.module("App");
app.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider,$cookieStore) {
  $routeProvider.
	when("/", {templateUrl: "/login.html", controller: "loginController"}).
	when("/success",{templateUrl: "/success.html",controller:"SuccessController"}).
	when("/faliure",{templateUrl: "/faliure.html",controller:"loginController"}).
	otherwise({redirectTo: '/'});
}]);