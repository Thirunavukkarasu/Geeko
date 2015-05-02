/**
 * Controls all other Pages
 */
geekoApp.controller('GeekoController', function ($rootScope,$scope,$location, $http ) {
	$scope.login = false;

	$scope.navigateUrl = function(url){
		$location.path(url);
	};

	$scope.onClickSignin = function(){
		$location.path("/admin-home");
	};

	$scope.onClickSigninWithGoogle = function(){
	    var ref = new Firebase($rootScope.baseUrl);
		ref.authWithOAuthPopup("google", function(error, authData) {
			$rootScope.$apply(function () {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    $location.path("/admin-home"); 			    
			    $rootScope.userData = authData.google.cachedUserProfile;	  
			  }				
			});
		},{
			remember: "sessionOnly",
			scope: "email"
		});
	};

	$scope.onClickSigninWithFacebook = function(){
        var ref = new Firebase($rootScope.baseUrl);		
		ref.authWithOAuthPopup("facebook", function(error, authData) {
			$rootScope.$apply(function () {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    $location.path("/admin-home"); 			
			    debugger;    
			    $rootScope.userData = authData.facebook.cachedUserProfile;	    
			  }	
			});
		},{
			scope: "email,user_likes,user_friends"			
		});      
	}	
});