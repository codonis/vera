var app = angular.module('app', ['matchMedia']);

app.controller('mainCtrl', ['$scope', 'screenSize', function ($scope, screenSize) {

    $scope.desktop = screenSize.on('md, lg', function (match) {
        $scope.desktop = match;
    });
    $scope.mobile = screenSize.on('xs, sm', function (match) {
        $scope.mobile = match;
    });
    $scope.ekran = screenSize.get();
}]);