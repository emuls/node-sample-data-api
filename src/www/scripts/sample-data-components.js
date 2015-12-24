angular.module('components', [])
    .directive('sampleData', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controllerAs:'sampleData',
            controller: function($scope, $element) {
                this.data = {"numbers":["1","2","3"]};
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