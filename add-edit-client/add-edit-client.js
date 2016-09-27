'use strict';

angular.module('myApp.addclients', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/add-edit-client', {
    templateUrl: 'add-edit-client/add-edit-client.html',
    controller: 'AddEditClientController'
  });

  $routeProvider.when('/add-edit-client/:id', {
    templateUrl: 'add-edit-client/add-edit-client.html',
    controller: 'AddEditClientController'
  });
}])

.controller('AddEditClientController', ['$scope', '$log', 'clientsFactory', '$routeParams', '$location',

	function($scope, $log, clientsFactory, $routeParams, $location) {
		
		$scope.clientData = {};
		$scope.clientData._id = $routeParams.id;
		$scope.header ="Add New Client";

		if($scope.clientData._id != 0) {
			
			$scope.header ="Edit Client Data";

			clientsFactory.getClientDetails($scope.clientData._id).then(
				function(res){
					$scope.clientData = res.data;
					$log.info($scope.clientData);
				},
				function(err){
					$log.error(err);
				}
			);

		}


		$scope.saveClient = function() {
			clientsFactory.saveClient($scope.clientData).then(
				function(){
					$log.info('Client saved successfully');
					$location.path('/clients');
				},
				function(){
					$log.error('Error saving data');
				}
			);
		};
	}

]);

