angular.module('ERMS').controller("SCRPackEngineer", function($scope,$state) {
	var vm=this;
	console.log("SCRPackEngineer!!!");
	vm.subMenu1 = false;
	vm.subMenu2 = false;
	vm.subMenu3 = false;
	vm.showSubmenu1 = function() {
		vm.subMenu1 = true;
	};
	vm.showSubmenu2 = function() {
		vm.subMenu2 = true;
	};
	vm.showSubmenu3 = function() {
		vm.subMenu3 = true;
	};
	
	var NPR='1';
	var SCR='2';
	
	if(NPR=='1'){
		vm.fixBanner = true;
	};
	
	if(SCR=='1'){
		vm.fixBanner = false;
	};
	
});