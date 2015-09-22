(function(){

    'use strict';

    module.exports = function($scope){

        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };


        var styleArray = [
            {
                featureType: "all",
                stylers: [
                    { hue: "#00ffe6"},
                    { saturation: -80 }
                ]
            },{
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                    { hue: "#00ffee" },
                    { saturation: 50 }
                ]
            },{
                featureType: "poi.business",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];
        $scope.options = {
            styles: styleArray
        };

    }

}());