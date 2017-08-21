var success=angular.module('Success',[])
console.log("asdadaaa");
success.controller('SuccessController',['$scope','$cookies','$location',function($scope,$cookies,$location)
{
	
		console.log("OMG")
		if($cookies.get('username'))
    	{
    	 	console.log($cookies.get('username'))
    	 	$location.url("/success");
    	}
    	else
    	{
    		console.log("Cookie is",$cookies.get('username'))
    		$location.url("/");

    	}



	$scope.checkAuth = function()
	{
		if($cookies.get('username'))
    	{
    	 	console.log($cookies.get('username'))
    	 	$location.url("/success");
    	}
    	else
    	{
    		console.log("Cookie is",$cookies.get('username'))
    		$location.url("/");

    	}

	}	

}
])