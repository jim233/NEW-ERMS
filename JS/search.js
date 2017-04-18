angular.module('ERMS').controller("searchExistingCtrl", function($scope,$state) {
	var vm = this;
	
	vm.requestModel = 
	[{
        id: 0,
		name: 'All',
   	}, {
   		id: 1,
		name: '2',
    }, {
        id: 2,
		name: '3',
    }];
    
	vm.requestSelected = '';
	
	vm.radioChecked = '0';
	vm.showFirstPart = false;
	vm.showSndPart = true;
	vm.showThrPart = true;
	vm.ShowFourPart = true;
	vm.showSearchResult = false;
	vm.contain1= true;
	
//	var r='SupplyChainRequest';
	vm.goState = function(rrrr) {
		console.log("@@@@@@@@@@@@@@@"+rrrr);
//		$state.go(rrrr);
		vm.showSearchResult = true;
		vm.contain1= false;
	}
	
	vm.RegisterPart = true;
	vm.NoRegisterPart = false;
	
	
	vm.radioCheckedFunc = function() {
		console.log("444444444444444444 " + vm.radioChecked);
		if(vm.radioChecked === '0'){
			vm.showFirstPart = false;
			vm.showSndPart = true;
			vm.showThrPart = true;
			vm.ShowFourPart = true;
		}
		if(vm.radioChecked === '1'){
			vm.showFirstPart = true;
			vm.showSndPart = false;
			vm.showThrPart = true;
			vm.ShowFourPart = true;
		}
		if(vm.radioChecked === '2'){
			vm.showFirstPart = true;
			vm.showSndPart = true;
			vm.showThrPart = false;
			vm.ShowFourPart = true;
		}
		if(vm.radioChecked === '3'){
			vm.showFirstPart = true;
			vm.showSndPart = true;
			vm.showThrPart = true;
			vm.ShowFourPart = false;
		}
	}
	
	 vm.getTableReturn = [
	{ RequestID: '42485', RequestType: "Country Add", Originator: "Mike Aldwinckle", Date: "/Date(1461571739037)/", LeadAI: "TRINEXAPAC-ETHYL", Country: "Ireland", CodeDueDate: "/Date(1462435739037)/", TradeName: "Tempo", PackSize: "12x1 L", Status: "Complete", FirstSale: "2/1/2017 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '3837r', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '3837b', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383761', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383762', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383763', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383764', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383765', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383766', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383767', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383768', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383769', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383760', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376a', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376b', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376c', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376d', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376e', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
    { RequestID: '383763', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383764', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383765', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383766', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383767', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383768', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383769', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '383760', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376a', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376b', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376c', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376d', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	{ RequestID: '38376e', RequestType: "New Pack", Originator: "Mike Aldwinckle", Date: "/Date(1426153683190)/", LeadAI: "PINOXADEN", Country: "Ireland", CodeDueDate: "/Date(1427731200000)/", TradeName: "Croplink Avena (Pro)", PackSize: "4x5 L", Status: "Complete", FirstSale: "3/1/2016 12:00:00 AM" },
	];


    vm.pageSize = 5;
    vm.pages = Math.ceil(vm.getTableReturn.length / vm.pageSize);
    console.log("!! + " + vm.pages);
    vm.newPages = vm.pages > 5 ? 5 : vm.pages;
    vm.pageList = [];
    vm.selPage = 1;

    vm.setData = function () {
        vm.pageTableRepeat = vm.getTableReturn.slice((vm.pageSize * (vm.selPage - 1)), (vm.selPage * vm.pageSize));
    }

    vm.pageTableRepeat = vm.getTableReturn.slice(0, vm.pageSize);
    for (var i = 0; i < vm.newPages; i++) {
        vm.pageList.push(i + 1);
    }
    vm.selectPage = function (page) {
        if (page < 1 || page > vm.pages) return;
        if (page > 2) {
            var newpageList = [];
            for (var i = (page - 3) ; i < ((page + 2) > vm.pages ? vm.pages : (page + 2)) ; i++) {
                newpageList.push(i + 1);
            }
            vm.pageList = newpageList;
        }
        vm.selPage = page;
        vm.setData();
        vm.isActivePage(page);
        console.log("page is：" + page);
    };
    vm.isActivePage = function (page) {
        return vm.selPage == page;
    };

    $scope.Previous = function () {
        vm.selectPage(vm.selPage - 1);
    }

    $scope.Next = function () {
        vm.selectPage(vm.selPage + 1);
    };
})
