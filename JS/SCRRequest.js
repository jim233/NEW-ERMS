angular.module('ERMS').controller("SCRRequest", function($scope, $state, $rootScope) {
	var vm = this;
	console.log("SCRRequest!!!");
	vm.showTextarea = true;
	vm.showStateName = 'Request';
	$rootScope.$broadcast('to-parent', vm.showStateName);
	//	console.log("selectChange" + vm.optionChecked);
	vm.SelectChangeFunc = function() {
		console.log("selectChange" + vm.optionChecked);
		if (vm.optionChecked === '0') {
			vm.showTextarea = true;
		}
		if (vm.optionChecked === '1') {
			vm.showTextarea = false;
		}
		if (vm.optionChecked === '2') {
			vm.showTextarea = true;
		}
	}

	vm.subMenu = false;
	vm.showSubmenu = function() {
		vm.subMenu = true;
	};

	$scope.InputRepeat = [];
	var i = 0;
	$scope.add = function() {
		var InputRepeat = {}
		i = i + 1;
		$scope.Inputid = i;
		$scope.InputRepeat.push(InputRepeat);
		console.log('Inputid1：' + $scope.Inputid);
	}

	$scope.del = function(index) {
		i = i - 1;
		$scope.Inputid = i;
		$scope.InputRepeat.splice(index, 1);
		console.log('Inputid2：' + $scope.Inputid);
	}
});