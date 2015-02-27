ProductsApp.controller("ProductsCtrl", function($resource){
  var Products = $resource('/products.json');
  this.get = function() {
    this.products = Products.query();
  };
});

ProductsApp.controller("ProductNewCtrl", function($resource, $location){
  var Product = $resource('/products.json');
  var ProductNewCtrl = function() {
    this.product = new Product();
  }
  ProductNewCtrl.prototype.saveProduct = function() {
    var self = this;
    Product.save(self.product, function(){
      alert(self.product.name + " saved!");
      $location.path("/products/" + self.product.id);
    });
  };

  return new ProductNewCtrl();
});

ProductsApp.controller("ProductCtrl", function($resource, $routeParams){

  var Product = $resource('/products/:id.json', {id: "@id"});

  var ProductCtrl = function() {
    var id = $routeParams.id;
    this.product = Product.get({id: id});
  };

  return new ProductCtrl();
});

ProductsApp.controller("ProductEditCtrl", function($resource, $routeParams, $location){

  var Product = $resource('/products/:id.json', {id: "@id"}, {update: {method:'PUT'}});

  var ProductEditCtrl = function() {
    var id = $routeParams.id;
    this.product = Product.get({id: id});
  };

  ProductEditCtrl.prototype.saveProduct = function() {
    var self = this;
    Product.update(self.product, function(){
      alert(self.product.name + " saved!");
      $location.path("/");
    });
  };

  return new ProductEditCtrl();
});
