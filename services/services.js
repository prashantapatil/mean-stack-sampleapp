'use strict';
angular.module('myApp.services', [])

.factory('clientsFactory', ['$http', '$log',

	function($http, $log){

		return {
			getClients: function(){
				return $http.get('/api/clients');
			},

			saveClient: function(clientData) {
				var id = clientData._id;

				$log.info(id);

				if(id == 0){
					return $http.post('/api/clients/add', clientData);
				} else {
					return $http.post('api/clients/update', clientData);
				}

			},

			deleteClient: function(id) {
				return $http.get('/api/clients/delete/' + id);
			},

			getClientDetails: function(id) {
				return $http.get('/api/clients/' + id);
			}
		};

	}


]);