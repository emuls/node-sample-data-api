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

								this.fetchData = function(cache){
									var url = cache ? 'api/data?cache=true' : 'api/data';
									$http.get(url).success(function(result){
										self.data = result;
									}).error(function(){
										this.data={"error" : "error loading data"};
									});
								}

								this.fetchData();
            },
            template:
            '<div class="sample-data-container">' +
                '<h1>Current Data:</h1>' +
                '<pre class="sample-data">' +
                    '{{sampleData.data | prettify}}' +
                '</pre>' +
								'<div><button ng-click="sampleData.fetchData()">Update</button></div>' +
						'<div><button ng-click="sampleData.fetchData(true)">Update With Cache</button></div>' +
            '</div>',
            replace: true
        };
    })