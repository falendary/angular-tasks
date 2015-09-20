(function() {
	'use strict';

	module.exports = function(flowFactoryProvider) {

		flowFactoryProvider.defaults = {
			permanentErrors: [404, 500, 501],
			maxChunkRetries: 1,
			chunkRetryInterval: 5000,
			simultaneousUploads: 4,
			singleFile: true
		};

		flowFactoryProvider.on('catchAll', function(event) {
			console.log('catchAll', arguments);
		});

	}

}());