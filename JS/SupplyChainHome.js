angular.module('ERMS').controller("SupplyChainHome", function($scope, $state,$modal,$log) {
	var vm = this;
	console.log('SupplyChainHome');

	$scope.requestModel = [{
		id: 0,
		name: 'All',
	}, {
		id: 1,
		name: '2',
	}, {
		id: 2,
		name: '3',
	}];

	$scope.requestSelected = null;
	$scope.textinput = null;
	
	console.log('requestSelected:'+$scope.requestSelected);
	console.log('textinput:'+$scope.textinput);
	
	$scope.change = function(requestSelected) {
		console.log(requestSelected);
		if ($scope.requestSelected == null) {
			$scope.showFirstPart = false;
		} else {
			$scope.showFirstPart = true;
		}
	}
	
	$scope.open = function(size) { //打开模态 
		if ($scope.requestSelected == null && $scope.textinput == null) {
			var modalInstance = $modal.open({
			templateUrl: 'myModelContent.html', //指向上面创建的视图
			controller: 'ModalInstanceCtrl', // 初始化模态范围
			size: size, //大小配置
			resolve: {
				requestSelected: function() {
					return $scope.requestSelected;
				}
				}
			})
			modalInstance.result.then(function(selectedItem) {
//			$scope.selected = selectedItem;
			}, function() {
				$log.info('Modal dismissed at: ' + new Date())
			})
		} else {
			$state.go('SupplyChainRequest.request');
		}
	}
});

angular.module('ERMS').controller('ModalInstanceCtrl', function($scope, $modalInstance, requestSelected,$state) { //依赖于modalInstance
	$scope.requestSelected = requestSelected;
//	debugger;
	console.log($scope.requestSelected);
	$scope.ok = function() {
//		$modalInstance.close($scope.selected.item); //关闭并返回当前选项
		$modalInstance.dismiss('cancel'); // 退出
		if ($scope.requestSelected == null) {
			$state.go('SupplyChainHome');
		} else {
			$state.go('SupplyChainRequest.request');
		}
	};
})