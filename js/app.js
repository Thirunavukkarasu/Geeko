/**
 * Main AngularJS Web Application
 */
var geekoApp = angular.module('angularjs', ['ngRoute','ngResource']);
geekoApp.run(function($rootScope,$window,$location) {
    $rootScope.baseUrl = 'https://ionic-logindemo.firebaseio.com/';
});