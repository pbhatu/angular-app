var login=angular.module("login",[]);

login.controller("loginController",['$scope','$location','LoginService','$http','$cookies',function($scope, $location,LoginService,$http,$cookies)
{
		console.log("hi");
		if($cookies.get('username'))
    	{
    	 	console.log($cookies.get('username'))
    	 	$location.url("/home");
    	}
    $scope.clicked = function(valid)
    {
    	if(valid)
      {
        console.log("Yes");
        LoginService.validate($scope.uname,$scope.pass)
      } 
    };
    
}
])
