'use strict';

(function () {

    var app = angular.module('nowDoWhatUiApp.header', []);

    app.controller('headerCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {
        var me = $scope;


        me.isLoggedIn = function () {
            return AuthService.isLoggedIn();
        }


    }]);

    app.directive("header", function () {
        return {
            restrict: 'E',
            templateUrl: 'views/headerDirective.html',
            controller: 'headerCtrl',
            replace: true
        };
    });


}());