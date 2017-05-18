angular.module('project')
    .component('tablesComponent', {
        controller: 'tablesController',
        templateUrl: 'app/components/tables/tables.html'
    })
    .controller('tablesController', function($state, Service){
        console.log(Service.data)
        this.data = Service.data;
        
    })