'use strict';

(function () {

    var app = angular.module('nowDoWhatUiApp.header', []);

    app.controller('headerCtrl', ['$scope', '$http', function ($scope, $http) {

    }]);

    app.directive("header", function () {
        return {
            restrict: 'E',
            templateUrl: 'views/headerDirective.html',
            replace: true
        };
    });


}());