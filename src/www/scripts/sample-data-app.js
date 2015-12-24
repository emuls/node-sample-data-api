angular.module('sample-data-app', ['components']).filter('prettify', function () {
    return function(json) { return angular.toJson(json, true); }
});