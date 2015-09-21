(function () {
	
	'use strict';

	require('whatwg-fetch');

	var app = angular.module('app', [
		'ngAnimate',
		'flow',
		'ngTable',
		'ui.router',
		'ui.bootstrap',
		'ngSanitize'
	]);

	app.config(['$stateProvider', '$urlRouterProvider', require('./app/router')]);
	// app.config(['flowFactoryProvider', require('./app/configs/flowConfig'));

	app.controller('chartController', [require('./app/controllers/chartController')]);
	app.controller('cropController', ['$scope', require('./app/controllers/cropController')]);
	app.controller('fusionChartsController', [require('./app/controllers/fusionChartsController')]);
	app.controller('googleMapController', [require('./app/controllers/googleMapController')]);
	app.controller('notificationsController', [require('./app/controllers/notificationsController')]);
	app.controller('sessionController', ['$scope', '$modal', require('./app/controllers/sessionController')]);
	app.controller('shellController', [require('./app/controllers/shellController')]);
	app.controller('tablesController', ['$scope', 'NgTableParams', require('./app/controllers/tablesController')]);
	app.controller('vectorMapController', ['$scope', require('./app/controllers/vectorMapController')]);
	app.controller('modalInstanceController', ['$scope', '$modalInstance', 'timeLeft', require('./app/controllers/modalInstanceController')]);

}());