var success=angular.module('Success',[])
console.log("asdadaaa");
success.controller('SuccessController',['$scope','$cookies','$location',function($scope,$cookies,$location)
{
	
		console.log("OMG")
		if($cookies.get('username'))
    	{
    	 	console.log($cookies.get('username'))
    	 	$location.url("/home");
    	}
    	else
    	{
    		console.log("Cookie is",$cookies.get('username'))
    		$location.url("/");

    	}
    	$scope.logout = function()
   		 {

    		$cookies.remove('username');
    		$location.url("/");
    	 }


}
])