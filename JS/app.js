'use strict';
var IndexApp = angular.module('ERMS', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap']);

IndexApp.run(function($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.$on('$stateChangeStart',
		function(event, toState, toParams, fromState, fromParams) {
			console.log("from the state + " + fromState.name);
		});

	$rootScope.$on('$stateChangeSuccess',
		function(event, toState, toParams, fromState, fromParams) {
			console.log("$stateChangeSuccess!!!!" + toState.name);
			$rootScope.getCurrentName = $state.current.name;
			$rootScope.$broadcast('to-child', $rootScope.getCurrentName);
		});
});

IndexApp.controller("headerCtrl", function($scope, $state, $rootScope) {
	var vm = this;

	vm.subMenu = false;
	vm.mainMenu = false;

	vm.showMainMenu = function() {
		vm.mainMenu = !vm.mainMenu;
	};

	vm.showSubmenu = function() {
		vm.subMenu = !vm.subMenu;
	};

	vm.closeShade = function() {
		vm.mainMenu = false;
	}

	$scope.$on('to-child', function(d, data) {
		vm.getCurrentName = data;
	});

	vm.subTabActive = function(tab) {
		return vm.getCurrentName === tab;
	};

	vm.subTabActive2 = function(tab) {
		return vm.getCurrentName === tab;
	};

	//	vm.menuRepeat = [
	//      {uiSelf: 'home',name: 'Home'},
	//      {uiSelf: 'CoreRange',name: 'Core Range'},
	//      {uiSelf: 'CoreRange',name: 'Core Range'},
	//	];
});

IndexApp.config(function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
		.state('home', {
			url: "/home",
			views: {
				"lazyLoadView": {
					controller: 'homePageCtrl',
					templateUrl: 'tpls/home.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/home.js');
				}]
			},
		})
		.state('SupplyChainHome', {
			url: "/SupplyChainHome",
			views: {
				"lazyLoadView": {
					controller: 'SupplyChainHome as SCH',
					templateUrl: 'tpls/newCodeRequest/SupplyChainHome.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SupplyChainHome.js');
				}]
			},
		})
		.state('CoreRange', {
			url: '/CoreRange',
			views: {
				"lazyLoadView": {
					controller: 'CoreRange as CR',
					templateUrl: 'tpls/CoreRange.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/CoreRange.js');
				}]
			},
		})
		.state('PhaseOuts', {
			url: '/PhaseOuts',
			views: {
				"lazyLoadView": {
					templateUrl: 'tpls/PhaseOuts.html'
				}
			},
		})
		.state('Reports', {
			url: '/Reports',
			views: {
				"lazyLoadView": {
					templateUrl: 'tpls/Reports.html'
				}
			},
		})
		.state('NewCodeRequests', {
			url: '/NewCodeRequests',
			views: {
				"lazyLoadView": {
					controller: 'newCodeRequestCtrl as NCR',
					templateUrl: 'tpls/NewCodeRequests.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/newCodeRequest.js');
				}]
			},
		})
		.state('SearchExistingRequest', {
			url: "/SearchExistingRequest",
			views: {
				"lazyLoadView": {
					controller: 'searchExistingCtrl as search',
					templateUrl: 'tpls/SearchExistingRequest.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/search.js');
				}]
			},
		})
		.state('ERMSReports', {
			url: '/ERMSReports',
			views: {
				"lazyLoadView": {
					templateUrl: 'tpls/ERMSReports.html'
				}
			},
		})
		.state('Admin', {
			url: '/Admin',
			views: {
				"lazyLoadView": {
					controller: 'AdminCtrl',
					templateUrl: 'tpls/Admin.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/Admin.js');
				}]
			},
		})
		.state('NewCodeRequestSub', {
			url: '/NewCodeRequestSub',
			views: {
				"lazyLoadView": {
					controller: 'NewCodeRequestSubCtrl',
					templateUrl: 'tpls/NewCodeRequestSub.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/newCodeRequestSub.js');
				}]
			},
		})
		.state("NewCodeRequestSub.NewCodeIMC", {
			url: "/NewCodeRequestSubIMC",
			views: {
				"lazyLoadView": {
					controller: 'NewCodeIMCCtrl as NewCodeIMC',
					templateUrl: 'tpls/newCodeRequest/NewCodeIMC.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/NewCodeIMC.js');
				}]
			},
		})
		.state("NewCodeRequestSub.NewCodeSC", {
			url: "/NewCodeRequestSubSupplyChain/:routePara/:checkState",
			views: {
				"lazyLoadView": {
					controller: 'NewCodeSupplyChain as NewCodeSC',
					templateUrl: 'tpls/newCodeRequest/NewCodeSupplyChain.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/NewCodeSupplyChain.js');
				}]
			},
		})
		.state('SupplyChainRequest', {
			url: '/SupplyChainRequest',
			views: {
				"lazyLoadView": {
					controller: 'SupplyChainRequest as SupplyChain',
					templateUrl: 'tpls/SupplyChainRequest.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SupplyChainRequest.js');
				}]
			},
		})
		.state("SupplyChainRequest.request", {
			url: "/SupplyChainRequestRequest",
			views: {
				"lazyLoadView": {
					controller: 'SCRRequest',
					templateUrl: 'tpls/spplChnRequest/SCRRequest.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SCRRequest.js');
				}]
			},
		})
		.state("SupplyChainRequest.EPM", {
			url: "/NewPackRequestEPM",
			views: {
				"lazyLoadView": {
					controller: 'NPREPM',
					templateUrl: 'tpls/newPackRequest/NPREPM.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/NPREPM.js');
				}]
			},
		})
		.state("SupplyChainRequest.Fast", {
			url: "/NewPackRequestFast",
			views: {
				"lazyLoadView": {
					controller: 'NPRFast',
					templateUrl: 'tpls/newPackRequest/NPRFast.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/NPRFast.js');
				}]
			},
		})
		.state("SupplyChainRequest.FirstGSCM", {
			url: "/SupplyChainRequestFirstGSCM",
			views: {
				"lazyLoadView": {
					controller: 'SCRFirstGSCM',
					templateUrl: 'tpls/spplChnRequest/SCRFirstGSCM.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SCRFirstGSCM.js');
				}]
			},
		})
		.state("SupplyChainRequest.SCTeam", {
			url: "/SupplyChainRequestSCTeam",
			views: {
				"lazyLoadView": {
					controller: 'SCRSCTeam',
					templateUrl: 'tpls/spplChnRequest/SCRSCTeam.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SCRSCTeam.js');
				}]
			},
		})
		.state("SupplyChainRequest.FinalGSCM", {
			url: "/SupplyChainRequestFinalGSCM",
			views: {
				"lazyLoadView": {
					controller: 'SCRFinalGSCM',
					templateUrl: 'tpls/spplChnRequest/SCRFinalGSCM.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SCRFinalGSCM.js');
				}]
			},
		})
		.state("SupplyChainRequest.SCP", {
			url: "/SupplyChainRequestSCP",
			views: {
				"lazyLoadView": {
					controller: 'SCRSCP',
					templateUrl: 'tpls/spplChnRequest/SCRSCP.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SCRSCP.js');
				}]
			},
		})
		.state("SupplyChainRequest.PackEngineer", {
			url: "/SupplyChainRequestPackEngineer",
			views: {
				"lazyLoadView": {
					controller: 'SCRPackEngineer',
					templateUrl: 'tpls/spplChnRequest/SCRPackEngineer.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SCRPackEngineer.js');
				}]
			},
		})
		.state("SupplyChainRequest.RDM", {
			url: "/SupplyChainRequestRDM",
			views: {
				"lazyLoadView": {
					controller: 'SCRRDM',
					templateUrl: 'tpls/spplChnRequest/SCRRDM.html'
				}
			},
			resolve: {
				loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load('JS/SCRRDM.js');
				}]
			},
		})
});