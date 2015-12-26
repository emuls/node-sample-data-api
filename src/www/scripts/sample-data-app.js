angular.module('sample-data-app', ['ngRoute', 'components']);

angular.module('sample-data-app').controller('MainController', function($scope, $http) {
    $scope.data = 'some data';
    $scope.postData = function(){
        $http.post('/api/data', $scope.data).success(function(result){
            alert('success');
        }).error(function(){
            alert('failure');
        });
    };
});

angular.module('sample-data-app').filter('prettify', function () {
    return function(json) { return angular.toJson(json, true); }
});