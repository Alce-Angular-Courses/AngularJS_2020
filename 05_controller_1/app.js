/* angular.module('miApp', [])
.controller('MainContoller', function ($scope) {
    $scope.nombre = 'Pepe'
    $scope.onClick = function () {
        $scope.nombre = ''
    }
}) */

angular.module('miApp', [])
.controller('MainContoller', ['$scope', function ($scope) {
    $scope.nombre = 'Pepe'
    $scope.onClick = function () {
        $scope.nombre = ''
    }
}])


