var main=angular.module("main",["LoginService","ngCookies"]);

main.controller("mainController",['$scope','$location','Login','$http','$cookieStore',function($scope, $location,Login,$http,$cookieStore){

    var temp={};
    var islogin=false;
    var false_password=false;
  var today = new Date();
    var expiresValue = new Date(today);

    //Set 'expires' option in 1 minute
    expiresValue.setMinutes(today.getMinutes() + 1); 
console.log("hi");


    $scope.clicked = function(valid){
    	if(valid)
      {
        console.log("Yes");
      }
      else if(!valid)
      {
        console.log("No");
      }

    	 $scope.result=Login.getdata();
    	 Login.getdata()
    	 .then(function(response)
    	 {
    	 	validate(response)	 	
    	 })



    	 var validate = function(response)
    	 {
    	 			users=response.data.users
		    	 	for(var i=0 ;i<users.length;i++)
		    	 	{

		    	 		if( ($scope.uname==users[i].name) && ($scope.pass==users[i].password) )
		    	 		{
		    	 			
		    	 			$cookieStore.put('username','users[i].name',{'expires' : expiresValue})
		    	 			
                 				
							
		    	 			swal("Good job!", "You Logged in!", "success");
		    	 			$location.url("/success");
		    	 			islogin=true;
		    	 			break;
		    	 		}
		    	 		else if(($scope.uname==users[i].name) && ($scope.pass!=users[i].password ) )
		    	 		{
			    	 				sweetAlert
			    	 		  ({
								title: "Oops!",
							    text: "Password Incorrect!",
							    type: "error"
							  });
				                false_password=true;
				                $scope.uname='';
				                $scope.pass='';

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
				                $scope.uname='';
				                $scope.pass='';

		    	 		}

    	 }




 };


}
])
