angular.module('ERMS').controller("NPRFast", function($scope,$state) {
	var vm=this;
	console.log("NPRFast!!!");
	vm.subMenu = false;
	vm.showSubmenu = function() {
		vm.subMenu = true;
	};
});