angular.module('ERMS').controller("CoreRange", function($scope,$state,$rootScope) {
	var vm = this;
	console.log("CoreRange!!!");
	vm.LinkShow = false;
	vm.showSelect=true;
	vm.requestModel = [{
		id: 0,
		name: 'All',
	}, {
		id: 1,
		name: '2',
	}, {
		id: 2,
		name: '3',
	}];
	
	vm.requestModel1 = [{
		id: 0,
		name: 'All',
	}, {
		id: 1,
		name: '2',
	}, {
		id: 2,
		name: '3',
	}];

    vm.requestSelected=null;
	vm.requestSelected1 =null;
	vm.textinput = null;
	
	console.log('requestSelected0.1:');
	console.log(vm.requestSelected);
	console.log('textinput:'+vm.textinput);
	
	vm.change = function() {
		console.log('requestSelected0.1:');
		console.log(vm.requestSelected);
		if (vm.requestSelected == null) {
			vm.LinkShow = false;
			vm.showSelect=true;
			console.log(vm.showSelect);
			vm.requestSelected1=null;
			console.log('requestSelected1.0:');
			console.log(vm.requestSelected1);
			vm.showSearchResult=false;
		} else {
			vm.LinkShow = true;
			vm.showSelect=false;
			console.log(vm.showSelect);
			vm.requestSelected1=null;
			console.log('requestSelected1.0.1:');
			console.log(vm.requestSelected1);
			vm.showSearchResult=false;
		}
		
	}
	
	vm.change1 = function() {
		console.log('requestSelected1.1:');
		console.log( vm.requestSelected1);
		if (vm.requestSelected1 == null) {
			vm.showSearchResult=false;
		} else {
			vm.showSearchResult=true;
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
