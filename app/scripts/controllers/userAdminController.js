'use strict';

(function () {

    var app = angular.module('nowDoWhatUiApp');

    app.controller('userAdminCtrl', ['$scope', 'UserService', function ($scope, UserService) {
        var me = $scope;

        me.getUserList = function () {
            UserService.getUserList().success(function (data) {
                me.usersList = data;
            });
        };
    }]);


}());