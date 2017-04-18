angular.module('ERMS').controller("SCRSCP", function($scope,$state) {
	
	var vm=this;
	console.log("SCRSCP!!!");
	
	vm.subMenu = false;
	vm.showSubmenu = function() {
		vm.subMenu = true;
	};
	
	vm.SelectChangeFunc = function() {
		console.log("selectChange" + vm.optionChecked);
		if(vm.optionChecked === ''){
			vm.LateLabellingPart=false;
		}
		if(vm.optionChecked === '1'){
			vm.LateLabellingPart=true;
		}
		if(vm.optionChecked === '2'){
			vm.LateLabellingPart=false;
		}
	}
});