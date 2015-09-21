(function () {

	'use strict';

	module.exports = function ($scope, NgTableParams) {
		
		var vm  = this;		
		console.log('tables!');

		var data = [{name: "Moroni", age: 50},
					{name: "Simon", age: 43},
					{name: "Jacob", age: 27},
					{name: "Nephi", age: 29},
					{name: "Christian", age: 34},
					{name: "Tiancum", age: 43},
					{name: "Jacob", age: 28}
				];
		vm.tableParams = new NgTableParams({
			count: 5
		}, { data: data});
		console.log('vm.tableParams', vm.tableParams);
	}

}());