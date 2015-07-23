'use strict';

(function () {

    var app = angular.module('nowDoWhatUiApp');

    app.controller('logoutCtrl', ['$scope', 'AuthService', function ($scope, AuthService) {
        var me = $scope;

        me.logout = function () {
            AuthService.logout();
        };
    }]);


}());