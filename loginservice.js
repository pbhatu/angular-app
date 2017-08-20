var LoginService = angular.module('LoginService', []);
LoginService.service('Login', function ($http) 
{
	
   

    this.getdata = function ()
    {

    	return $http.get('details.json')
    	
        	
    }
    

}
);