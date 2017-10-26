angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://webb.work:8080/delta-tweet/airports').
        then(function(response) {
            $scope.airports = angular.fromJson(response.data);
        });
});
