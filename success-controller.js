var success=angular.module('Success',[])
console.log("asdadaaa");
success.filter('selectcategory',function()
{
	return function (phonedetails,selectedcategory)
	{
		var filtered =[];
		console.log("Length not defined",selectedcategory)
		if(!selectedcategory | selectedcategory=="All")
		{
			return phonedetails;
		}
		else
		{
			for(var i=0;i<phonedetails.length;i++)
			{
				console.log(phonedetails[i])
				if(phonedetails[i].category==selectedcategory)
				{
					filtered.push(phonedetails[i])
				}
			}
			return filtered;
		}

	}

})
success.controller('SuccessController',['$scope','$cookies','$location','ProductService',function($scope,$cookies,$location,ProductService)
{

		$scope.phonedetails = []
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
				 console.log("Please")
    		$cookies.remove('username');
    		$location.url("/");
    	 }


			 $scope.fetchProductDetails = function()
			 {
			    ProductService.fetch()
					.then(function(response)
				{
					console.log(response.data.Phones);
					$scope.phonedetails = response.data.Phones;
				})
				.catch(function(response)
				{
				console.log()
				})

			 }
			 $scope.details = {};
			 $scope.selectcategory = function(selected)
			 {
				// console.log(($scope.phonedetails.category));

				// return (selected=$scope.phonedetails.category)
			 }



}


])
