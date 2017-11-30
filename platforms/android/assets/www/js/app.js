// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
console.log("app.js loaded.");
angular.module('starter', ['ionic'])

.service('Auth', function($q, $ionicLoading) {

   this.getLoginStatus = function() {
      var defer = $q.defer();

      FB.getLoginStatus(function(response) {
    
         if (response.status === "connected") {
          alert(JSON.stringify(response));
            console.log(JSON.stringify(response));
         } else {
          alert("Not logged in");
            console.log("Not logged in");
         }
      });

      return defer.promise;
   }
   
   this.loginFacebook = function() {
      var defer = $q.defer();

      FB.login(function(response) {
    
         if (response.status === "connected") {
            alert("connected");
            console.log(JSON.stringify(response));
         } else {
          alert("Not logged in!")
            console.log("Not logged in!");
         }
      });

      return defer.promise;
   }

   this.logoutFacebook = function() {
      var defer = $q.defer();

      FB.logout(function(response) {
        alert("You are logged out!");
         console.log('You are logged out!');
      });

      return defer.promise;
   }

   this.getFacebookApi = function() {
      var defer = $q.defer();

      FB.api("me/?fields = id,email", [], function(response) {
    
         if (response.error) {
          alert(JSON.stringify(response.error));
            console.log(JSON.stringify(response.error));
         } else {
          alert(JSON.stringify(response));
            console.log(JSON.stringify(response));
         }
      });

      return defer.promise;
   }
})

.controller('MyCtrl', function($scope, Auth, $ionicLoading) {

   $scope.checkLoginStatus = function() {
    
      console.log("login StatusBar");
      getLoginUserStatus();
   };

   $scope.loginFacebook = function(userData) {
    //alert("login loginFacebook");
    console.log("login loginFacebook");
      loginFacebookUser();
   };

   $scope.facebookAPI = function() {
    //alert("login getFacebookApi");
    console.log("login getFacebookApi");
      getFacebookUserApi();
   };

   $scope.logoutFacebook = function() {
   // alert("login logoutFacebook");
    console.log("login logoutFacebook");
      logoutFacebookUser();
   };

   function loginFacebookUser() {
    
      return Auth.loginFacebook();
   };

   function logoutFacebookUser() {
      return Auth.logoutFacebook();
   };

   function getFacebookUserApi() {
      return Auth.getFacebookApi();
   };

   function getLoginUserStatus() {
      return Auth.getLoginStatus();
   };
})




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
