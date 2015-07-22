'use strict';

(function () {

    var app = angular.module('nowDoWhatUiApp');

    app.controller('signInCtrl', ['$scope', '$rootScope', '$location', 'AuthService', function ($scope, $rootScope, $location, AuthService) {
        var me = $scope;

        me.loggedIn = AuthService.isLoggedIn();
        me.loginData = {};

        $rootScope.$on('$routeChangeStart', function () {
            me.loggedIn = AuthService.isLoggedIn();

            AuthService.getUser()
                .then(function (data) {
                    me.user = data.data;
                });
        });

        me.doLogin = function () {
            me.processing = true;
            me.error = '';
            AuthService.login(me.loginData.userName, me.loginData.password)
                .success(function (data) {
                    me.processing = false;

                    AuthService.getUser()
                        .then(function (data) {
                            me.user = data.data;
                        });

                    if (data.success) {
                        $location.path('/');
                    } else {
                        me.error = data.message;
                    }
                });
        };

        me.logout = function () {
            AuthService.logout();
            $location.path('/logout');
        };
    }]);


}());