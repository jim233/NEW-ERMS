angular.module('ERMS').controller("AdminCtrl", function($scope, $state) {
	var vm = this;
	console.log("Admin");

	$scope.AdmLinkRepeat = [{
		Admlink: 'Manage Pack Tech',
		url:'http://www.runoob.com'
	}, {
		Admlink: 'Manage Local Contacts',
		url:'http://www.baidu.com'
	}, {
		Admlink: 'Manage PLS Contacts'
	}, {
		Admlink: 'Manage Contacts Based on Request Type'
	},{
		Admlink: 'Manage Pack'
	},{
		Admlink: 'Core Range Upload'
	}, 
	];
})