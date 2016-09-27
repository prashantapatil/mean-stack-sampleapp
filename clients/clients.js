'use strict';

angular.module('myApp.clients', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clients', {
    templateUrl: 'clients/clients.html',
    controller: 'ClientsController'
  });
}])

.controller('ClientsController', ['$scope', '$log', 'clientsFactory',

	function($scope, $log, clientsFactory) {
		

		clientsFactory.getClients().then(
			function(res) {
				$scope.clients = res.data;
			},
			function(err) {
				$log.error(err);
			}

		);


		$scope.deleteClient = function(id) {
			clientsFactory.deleteClient(id);
			
		};
	}

]);

