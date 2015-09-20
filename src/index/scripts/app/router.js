(function () {

    'use strict';

    module.exports = function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('interface', {
                url: '',
                abstract: true,
                templateUrl: 'shell.html'
            })
            .state('interface.chart', {
                url: '/chart',
                templateUrl: 'chart.html'
            })
            .state('interface.crop', {
                url: '/crop',
                templateUrl: 'crop.html'
            })
            .state('interface.session', {
                url: '/session',
                templateUrl: 'session.html'
            })
            .state('interface.notifications', {
                url: '/notifications',
                templateUrl: 'notifications.html'
            })
            .state('interface.vectormap', {
                url: '/vectormap',
                templateUrl: 'vectorMap.html'
            })
            .state('interface.fusioncharts', {
                url: '/fusioncharts',
                templateUrl: 'fusionCharts.html'
            })
            .state('interface.tables', {
                url: '/tables',
                templateUrl: 'tables.html'
            })
            .state('interface.googlemap', {
                url: '/googlemap',
                templateUrl: 'googleMap.html'
            });
        $urlRouterProvider.otherwise('/chart');
    };

}());