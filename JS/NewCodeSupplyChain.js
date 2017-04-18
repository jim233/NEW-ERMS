angular.module('ERMS').controller("NewCodeSupplyChain", function($scope,$state,$modal,$log,$stateParams) {
	var vm = this;
//	vm.radioChecked = '0';
	
	$scope.radioChecked=[];
	
	$scope.radioChecked.ooo='aaa';
	
	$scope.radioChecked.qqq = '0';
	
	$scope.radioCheckedFunc = function() {
		console.log("444444 " + $scope.radioChecked);
		if($scope.radioChecked.qqq === '0'){

		}
		if($scope.radioChecked.qqq === '1'){

		}
	}
	
	var routePara2=$stateParams.routePara;
	var routeParacheckS=$stateParams.checkState;
	
	console.log('RoutePara: '+routePara2+routeParacheckS)
	
	
//	$scope.items = ['html5', 'jq', 'FE-演示平台', 'html52', 'jq2', 'FE-演示平台2', 'html53', 'jq3', 'FE-演示平台3','html54', 'jq4', 'FE-演示平台4'];
	$scope.open = function(size) { //打开模态 
		var modalInstance = $modal.open({
			templateUrl: 'myModelContent.html', //指向上面创建的视图
			controller: 'ModalInstanceCtrl', // 初始化模态范围
			size: size, //大小配置
			resolve: {
				radioChecked: function() {
					return $scope.radioChecked;
				}
			}
		})
		modalInstance.result.then(function(selectedItem) {
//			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date())
		})
	}
});


angular.module('ERMS').controller('ModalInstanceCtrl', function($scope, $modalInstance, radioChecked,$state) { //依赖于modalInstance
	$scope.radioChecked = radioChecked;
//	debugger;
	console.log(JSON.stringify($scope.radioChecked));
	$scope.ok = function() {
//		$modalInstance.close($scope.selected.item); //关闭并返回当前选项
		$modalInstance.dismiss('cancel'); // 退出
		if($scope.radioChecked.qqq==='0'){	
			$state.go('SupplyChainHome');
		}
		if($scope.radioChecked.qqq==='1'){
			$state.go('SupplyChainRequest.request');
		}
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel'); // 退出
	}
})