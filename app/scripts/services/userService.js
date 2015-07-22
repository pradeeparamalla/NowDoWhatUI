'use strict';

(function () {

    var app = angular.module('nowDoWhatUiApp');

    app.factory('UserService', ['$http', function ($http) {

        var userFactory = {};
        userFactory.createAccount = function (userData) {
            return $http.post('/api/signup', userData);
        };

        userFactory.getUserList = function () {
            return $http.get('/api/users');
        };

        return userFactory;

    }]);

}());