angular.module('ERMS').controller("newCodeRequestCtrl", ['$scope', '$state', '$modal', '$log', function($scope, st, $modal, $log) {
	var vm = this;
    
    vm.radioChecked='0';
//  console.log(vm.radioChecked);
    $scope.routPara1='This is rout parameter!! '
    
    vm.radioCheckedFunc = function() {};
    
	vm.goState = function() {
		if(vm.radioChecked==='0'){
			st.go('NewCodeRequestSub.NewCodeSC',{routePara: $scope.routPara1,checkState:vm.radioChecked});
		}
		if(vm.radioChecked==='1'){
			st.go('SearchExistingRequest');
		}
	};
	
	vm.goState2 = function(rrrr) {
		console.log("@@@@@@@@@@@@@@@"+rrrr);
		st.go(rrrr);
	}
	


	$scope.items = ['html5', 'jq', 'FE-演示平台', 'html52', 'jq2', 'FE-演示平台2', 'html53', 'jq3', 'FE-演示平台3','html54', 'jq4', 'FE-演示平台4'];
	$scope.open = function(size) { //打开模态 
		var modalInstance = $modal.open({
			templateUrl: 'myModelContent.html', //指向上面创建的视图
			controller: 'ModalInstanceCtrl', // 初始化模态范围
			size: size, //大小配置
			resolve: {
				items: function() {
					return $scope.items;
				}
			}
		})
		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
			console.log("$scope.selected1111:"+$scope.selected);
		}, function() {
			$log.info('Modal dismissed at: ' + new Date())
		})
	}
	
	
}])

angular.module('ERMS').controller('ModalInstanceCtrl', function($scope, $modalInstance, items,$modal, $log) { //依赖于modalInstance
	$scope.items = items;
	$scope.selected = {
		item: $scope.items[0]
	};
	$scope.Rchecked0=true;
	$scope.disabled=true;
//	alert($scope.radioChecked0);
	$scope.radioCheckedFunc1= function(disabled){
		$scope.disabled=disabled;
//		alert("mod"+$scope.radioChecked0)
	}

	$scope.ok = function() {
		console.log("$scope.selected:"+$scope.selected.item);
		$modalInstance.close($scope.selected.item); //关闭并返回当前选项
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel'); // 退出
	}
	
	$scope.open1 = function(size) { //打开模态 
		var modalInstance = $modal.open({
			templateUrl: 'myModelContent1.html', //指向上面创建的视图
			controller: 'ModalInstanceCtrl1', // 初始化模态范围
			size: size, //大小配置
			resolve: {
				items: function() {
					return $scope.items;
				}
			}
		})
		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date())
		})
	}
})

angular.module('ERMS').controller('ModalInstanceCtrl1', function($scope, $modalInstance, items,$modal) { //依赖于modalInstance
	$scope.items = items;
	$scope.selected = {
		item: $scope.items[0]
	};

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item); //关闭并返回当前选项
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel'); // 退出
	}
	
})