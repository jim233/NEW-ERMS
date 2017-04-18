angular.module('ERMS').controller("SCRRDM", function($scope,$state) {
	var vm=this;
	console.log("SCRRDM!!!");
	vm.subMenu = false;
	vm.showSubmenu = function() {
		vm.subMenu = true;
	};
});