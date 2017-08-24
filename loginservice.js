var loginservice = angular.module('LoginServices', []);
console.log("Yo")
loginservice.service('LoginService', function ($http,$location,$cookies)
{
    this.validate = function(username,password)
    	 {
    	 	var expiresValue = new Date();
		    expiresValue.setMinutes(expiresValue.getMinutes() + 1);
		    console.log(expiresValue);
    	 			$http.get('details.json')
    	 			.then(function(response)
    	 			{
    	 				users=response.data.users
		    	 	for(var i=0 ;i<users.length;i++)
		    	 	{

		    	 		if( (username==users[i].name) && (password==users[i].password) )
		    	 		{
		    	 			console.log(expiresValue)

		    	 			$cookies.put('username',users[i].name,{'expires' : expiresValue})
		    	 			console.log($cookies.get('username'));
		    	 			swal("Good job!", "You Logged in!", "success");
		    	 			$location.url("/home");
		    	 			islogin=true;
		    	 			break;
		    	 		}
		    	 		else if((username==users[i].name) && (password!=users[i].password ) )
		    	 		{
			    	 				sweetAlert
			    	 		  ({
								title: "Oops!",
							    text: "Password Incorrect!",
							    type: "error"
							  });
				                false_password=true;
				                username='';
				                password='';

		    	 		}
            		}
		    	 	 if(islogin==false && false_password==false)
		    	 		{
		    	 				sweetAlert
			    	 		  ({
								title: "Oops!",
							    text: "Username Incorrect!",
							    type: "error"
							  });
				                username='';
				                password='';
		    	 		}


    	 			})

    	 }

    	 this.auth =function(username)
    	 {
    	 	if($cookies.get(username))
    	 	{
    	 		$location.url("/home");
    	 	}
    	 	else if(!$cookies.get(username))
    	 	{
    	 		$location.url("/");
    	 	}
    	 }
    	 this.clearcredentials=function()
    	 {

    	 	console.log($cookies.get('username'));
    	 	$location.url("/");

    	 }

}
);
