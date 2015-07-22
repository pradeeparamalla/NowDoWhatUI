'use strict';

/**
 * @ngdoc overview
 * @name nowDoWhatUiApp
 * @description
 * # nowDoWhatUiApp
 *
 * Main module of the application.
 */

(function () {

    var app = angular.module('nowDoWhatUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'nowDoWhatUiApp.header'
  ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('userAdmin', {
                url: '/userAdmin',
                templateUrl: 'views/userAdmin.html',
                controller: 'userAdminCtrl'
            })
            .state('signIn', {
                url: '/signIn',
                templateUrl: 'views/signin.html',
                controller: 'signInCtrl'
            })
            .state('signUp', {
                url: '/signUp',
                templateUrl: 'views/signup.html',
                controller: 'signUpCtrl'
            });
    });

}());