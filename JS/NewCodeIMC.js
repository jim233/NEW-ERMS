angular.module('ERMS').controller("NewCodeIMCCtrl", function($scope,$state) {
	var vm = this;
	
	vm.radioChecked0='1';

//	console.log(vm.radioChecked1);
	
	vm.showPart2 = true;
	vm.showPart3 = true;
	vm.Rchecked1 = true;
	vm.Rchecked2 = true;
	vm.radioCheckedFunc = function() {
//		console.log("000 " + vm.radioChecked0);
//		console.log("111 " + vm.radioChecked1);

		if(vm.radioChecked0 === '0'){
			vm.showPart2 = false;
			vm.showPart3 = false;
//			console.log("PFR" + vm.radioChecked1);
			console.log("PFR" + vm.Rchecked2);
		}
		if(vm.radioChecked0 === '1'){
			vm.showPart2 = true;
			vm.showPart3 = true;
		}
	}
	
	vm.goState = function() {
		if(vm.radioChecked0==='1'){
			$state.go('CoreRange');
		}
		if(vm.radioChecked0==='0'&& vm.Rchecked2===true){
			$state.go('SupplyChainRequest.request');
		}
		if(vm.radioChecked0==='0'&& vm.Rchecked3===true){
			$state.go('SupplyChainRequest.request');
		}
	};
});