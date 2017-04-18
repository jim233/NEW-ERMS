angular.module('ERMS').controller("NPREPM", function($scope,$state) {
	var vm=this;
	console.log("NPREPM!!!");
	vm.subMenu = false;
	vm.showSubmenu = function() {
		vm.subMenu = true;
	};
});