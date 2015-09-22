(function(){

    'use strict';

    module.exports = function($scope, toastr) {


        console.log('toastr', toastr);

        $scope.toaster = {
            type: 'success',
            title: 'Title',
            text: 'Message'
        };
        $scope.pop = function(){
            eval('toastr.'+$scope.toaster.type+'($scope.toaster.text, $scope.toaster.title)');
        };

        var getRandomArbitary = function (min, max) {
            return Math.round(Math.random() * (max - min) + min);
        };


        setInterval(function(){
            switch (getRandomArbitary(1, 4)){
                case (1):
                    toastr.success('I am success message comes from the server', 'hello');
                    break;
                case (2):
                    toastr.info('I am info message comes from the server', 'hello');
                    break;
                case (3):
                    toastr.warning('I am warning message comes from the server', 'hello');
                    break;
                case (4):
                    toastr.error('I am error message comes from the server', 'hello');
                    break;
                default:
                    toastr.info('I am info message comes from the server', 'hello');
                    break;

            }

        }, 5000)
    }

}());