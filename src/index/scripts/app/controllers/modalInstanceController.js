(function() {

	'use strict';

	module.exports = function($scope, $modalInstance, timeLeft) {

		$scope.timeLeft = timeLeft; 

		setInterval(function () {
			$scope.timeLeft = $scope.timeLeft - 1;
			if ($scope.timeLeft <= 0) {
				$scope.cancel();				
			};
			$scope.$apply();		
		}, 1000)

		$scope.ok = function() {
			$modalInstance.close();
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
			window.sessionStorage.removeItem('userSession');
		};

	}


}());