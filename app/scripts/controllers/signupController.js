'use strict';

(function () {

    var app = angular.module('nowDoWhatUiApp');

    app.controller('userListCtrl', ['$scope', 'UserService', function ($scope, UserService) {
        var me = $scope;

        me.getUserList = function () {
            UserService.getUserList().success(function (data) {
                me.usersList = data;
            });
        };
    }]);

    app.controller('signUpCtrl', ['$scope', 'UserService', '$location', '$window', function ($scope, UserService, $location, $window) {
        var me = $scope;

        me.signupUser = function () {
            me.message = '';

            UserService.createAccount(me.userData)
                .then(function (response) {
                    me.userData = {};
                    me.message = response.data.message;

                    $window.localStorage.setItem('token', response.data.token);
                    $location.path('/');

                });
        };
    }]);


}());