angular.module('ERMS').controller("SCRSCTeam", function($scope,$state) {
	var vm=this;
	console.log("SCRSCTeam!!!");
	vm.subMenu1 = false;
	vm.subMenu2 = false;
	vm.subMenu3 = false;
	vm.subMenu4 = false;
	vm.showSubmenu1 = function() {
		vm.subMenu1 = true;
	};
	vm.showSubmenu2 = function() {
		vm.subMenu2 = true;
	};
	vm.showSubmenu3 = function() {
		vm.subMenu3 = true;
	};
	vm.showSubmenu4 = function() {
		vm.subMenu4 = true;
	};
});