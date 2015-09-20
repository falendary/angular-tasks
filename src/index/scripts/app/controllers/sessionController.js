(function() {

	'use strict';

	module.exports = function($scope, $modal) {

		var vm = this;
		vm.modalExist = false;

		$scope.stayLogged = true;

		vm.open = function(size) {

			var modalInstance = $modal.open({
				templateUrl: 'modal.html',
				controller: 'modalInstanceController',
				size: size,
				resolve: {
					timeLeft: 59
				}
			});

			modalInstance.result.then(function(response) {
				window.sessionStorage.removeItem('userSession');
				initSession();
				$scope.stayLogged = true;
				vm.modalExist = false;
			});
		};

		var initSession = function(argument) {

			var startTime = new Date();
			var endTime = new Date(startTime.getTime() + 100000); // 5 mins

			var session = {
				created: startTime,
				expires: endTime
			}

			vm.start = startTime;
			vm.end = endTime;

			window.sessionStorage.setItem('userSession', JSON.stringify(session));
		}

		initSession();

		setInterval(function(argument) {
			if (window.sessionStorage.getItem('userSession')) {
				if (!vm.modalExist) {
					var userSession = JSON.parse(window.sessionStorage.getItem('userSession'));
					
					var current = new Date().getTime();
					var expires = new Date(userSession.expires).getTime() - 60000;

					// console.log('current', current);
					// console.log('expires', expires);

					if (current >= expires) {
						vm.open();
						vm.modalExist = true;
					}
				};
			} else {
				$scope.stayLogged = false;
				$scope.$apply();
			}

		}, 1000)
	}

}());