angular.module('ERMS').controller("SCRFinalGSCM", function($scope,$state) {
	var vm=this;
	console.log("SCRFinalGSCM!!!");
	
	vm.subMenu = false;
	vm.showSubmenu = function() {
		vm.subMenu = true;
	};
});