angular.module('ERMS').controller("SupplyChainRequest", function($scope,$state) {
     var vm = this;
     
     vm.supplyDetail = '';
     vm.subTabSCRs = [];
     vm.titleName = '';
     
     vm.getTypeName = 'All';
     
     vm.supplyDetail.rangeNumber = '27874';
     
     $scope.$on('to-parent', function(d, data) {
           console.log("!@@!@!@!@!@! +" + d.name + ' ' + data);
           vm.titleName = data;
     });
     
     vm.currentURL = function(a) {
           return $state.href('SupplyChainRequest' + a);
     }
           
     vm.listRequest = {
           url: vm.currentURL('.request'),
           printName: 'Request',
           name:'request',
           tabReqCode: '1',
     };
     vm.listEPM = {
           url: vm.currentURL('.EPM'),
           printName: 'EPM',
           name:'EPM',
           tabReqCode: '2',
     };
     vm.listFast = {
           url: vm.currentURL('.Fast'),
           printName: 'Fast',
           name:'Fast',
           tabReqCode: '3',
     };
     vm.listFirstGSCM = {
           url: vm.currentURL('.FirstGSCM'),
           printName: 'First GSCM',
           name:'FirstGSCM',
           tabReqCode: '4',
     };
     vm.listSCTeam = {
           url: vm.currentURL('.SCTeam'),
           printName: 'SC Team',
           name:'SCTeam',
           tabReqCode: '5',     
     };
     vm.listFinalGSCM = {
           url: vm.currentURL('.FinalGSCM'),
           printName: 'Final GSCM',
           name:'FinalGSCM',
           tabReqCode: '6',           
     }
     vm.listSCP = {
           url: vm.currentURL('.SCP'),
           printName: 'SCP',
           name:'SCP',
           tabReqCode: '7',           
     };
     vm.listPackEngineer = {
           url: vm.currentURL('.PackEngineer'),
           printName: 'Pack Engineer',
           name:'PackEngineer',
           tabReqCode: '8',
     };
     vm.listRDM = {
           url: vm.currentURL('.RDM'),
           printName: 'RDM',
           name:'RDM',
           tabReqCode: '9',
     }

     switch (vm.getTypeName) {

		   case 'All': 
                vm.subTabSCRs.push(vm.listRequest,vm.listEPM,vm.listFast,vm.listFirstGSCM,vm.listSCTeam,vm.listFinalGSCM,vm.listSCP,vm.listPackEngineer,vm.listRDM);
           break;
           case 'EPT': 
                vm.subTabSCRs.push(vm.listRequest,vm.listEPM,vm.listFast,vm.listFirstGSCM);
           break;
           case 'New Pack': 
                vm.subTabSCRs.push(vm.listRequest,vm.listEPM);
           break;
           case 'Country Add':
                vm.subTabSCRs.push(vm.listRequest,vm.listEPM);
           break;
           case 'PFR':
                vm.subTabSCRs.push(vm.listRequest,vm.listEPM);
           break;
           case 'Other':
                vm.subTabSCRs.push(vm.listRequest,vm.listEPM);
           break;     
           case 'Supply Chain':
                vm.subTabSCRs.push(vm.listRequest,vm.listEPM);
           break;     
           case 'Combi Pack':
                vm.subTabSCRs.push(vm.listRequest,vm.listEPM);
           break;     
           default:
                vm.subTabSCRs = [];
     }


//   vm.subTabSCRs = [{
//         url: vm.currentURL('.request'),
//         printName: 'Request',
//         name:'Request',
//         tabReqCode: '1',
//         
//   },{
//         url: vm.currentURL('.EPM'),
//         printName: 'EPM',
//         name:'EPM',
//         tabReqCode: '2',
//   },{
//         url: vm.currentURL('.Fast'),
//         printName: 'Fast',
//         name:'Fast',
//         tabReqCode: '3',
//   },{
//         url: vm.currentURL('.FirstGSCM'),
//         printName: 'First GSCM',
//         name:'FirstGSCM',
//         tabReqCode: '4',
//   },{
//         url: vm.currentURL('.SCTeam'),
//         printName: 'SC Team',
//         name:'SCTeam',
//         tabReqCode: '5',
//   },{
//         url: vm.currentURL('.FinalGSCM'),
//         printName: 'Final GSCM',
//         name:'FinalGSCM',
//         tabReqCode: '6',
//   },{
//         url: vm.currentURL('.SCP'),
//         printName: 'SCP',
//         name:'SCP',
//         tabReqCode: '7',
//   },{
//         url: vm.currentURL('.PackEngineer'),
//         printName: 'Pack Engineer',
//         name:'PackEngineer',
//         tabReqCode: '8',
//   },{
//         url: vm.currentURL('.RDM'),
//         printName: 'RDM',
//         name:'RDM',
//         tabReqCode: '9',
//   }]
});

