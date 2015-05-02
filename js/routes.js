/**
 * Configure the Routes
 */
 
geekoApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/signin", {
        templateUrl : "partials/signin.html", 
        controller  : "GeekoController"
    })
    .when("/signup", {
        templateUrl : "partials/signup.html", 
        controller  : "GeekoController"
    })
    .when("/forgot-password",{
        templateUrl : "partials/forgot-password.html",
        controller  : "GeekoController"
    })   
    .when("/admin-home",{
        templateUrl : "partials/admin-home.html",
        controller  : "GeekoController"
    })
    .otherwise({
        redirectTo: '/signin'
    });
}]);