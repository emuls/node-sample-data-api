angular.module('components', [])
    .directive('sampleData', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controllerAs:'sampleData',
            controller: function($scope, $element, $http) {
                var self = this;
                this.data = {"Loading":"Loading please wait..."};
                $http.get("api/data").success(function(result){
                    self.data = result;
                }).error(function(){
                   this.data={"error" : "error loading data"};
                });
            },
            template:
            '<div class="sample-data-container">' +
                '<h1>Current Data:</h1>' +
                '<pre class="sample-data">' +
                    '{{sampleData.data | prettify}}' +
                '</pre>' +
            '</div>',
            replace: true
        };
    })