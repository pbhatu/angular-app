var productservices=angular.module('ProductServices',[])

productservices.factory('ProductService',['$http',function($http)
{
  var factory ={}
  factory.fetch = function()
  {
   return $http.get('product_details.json')
 }
 return factory;
 }

])
