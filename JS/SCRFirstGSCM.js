angular.module('ERMS').controller("SCRFirstGSCM", function($scope,$state) {
	var vm=this;
	console.log("SCRFirstGSCM!!!");
	vm.subMenu = false;
	vm.showSubmenu = function() {
		vm.subMenu = true;
	};
});