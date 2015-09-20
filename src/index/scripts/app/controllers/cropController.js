(function() {

		'use strict';

		module.exports = function($scope) {

			var vm = this;

			vm.emptySlot = true;

			var draw = function (imgSrc) {
				setTimeout(function (argument) {
					$(".img-container img").cropper({
						aspectRatio: 16 / 9,
						preview: ".img-preview",
						done: function(data) {
							console.log('teste');
						}
					})
				}, 1)
				
			}

			vm.startCroping = function () {
				vm.emptySlot = false;
				vm.imgSrc = $('#imageDropped')[0].src;
				draw(vm.imgSrc);
			}
			
		}

}());