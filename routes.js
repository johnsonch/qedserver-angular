var ProductsApp = angular.module("products", ["ngResource", "ngRoute"]);
ProductsApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when("/products",{ controller: "ProductsCtrl as productsCtrl"}).
    when("/products/new",{ controller: "ProductNewCtrl as productNewCtrl", 
                           templateUrl: "/templates/new.html"}).
    when("/products/:id",{ controller: "ProductCtrl as productCtrl", 
                           templateUrl: "/templates/show.html"}).
    when("/products/:id/edit",{ controller: "ProductEditCtrl as productEditCtrl", 
                                templateUrl: "/templates/edit.html"}).
    otherwise({redirectTo : "/products"});
}]);
