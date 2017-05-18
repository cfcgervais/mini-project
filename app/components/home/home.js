angular.module('project')
    .component('homeComponent', {
        controller: 'homeController',
        templateUrl: 'app/components/home/home.html'
    })
    .controller('homeController', function ($state, $http, Service, $filter) {

        // $http.get('overview.json').success(function(data){
            
        //     function meridiem(str){
        //         var res;
        //         var hour = str[13] + str[14];
        //         if(hour > 12){
        //             var newHour = hour - 12;
        //             res = str.slice(0, 13) + newHour + str.slice(15);
        //             res += 'pm';
        //         }else if(hour === '00'){
        //             res = str.replace(hour, '12');
        //             res += 'am';
        //         }else{
        //             res = str + 'am';
        //         };
        //         return res;
        //     }

        //     formatDate(data);
        //     function formatDate(data){
        //         for(var i = 0; i < data.length; i++){
        //             data[i].hour = i + 1;
        //             var startTime = String(new Date(data[i].TimeSegment.start));
        //             var endTime = String(new Date(data[i].TimeSegment.end));
        //             startTime = startTime.substring(4);
        //             endTime = endTime.substring(4);
        //             startTime = startTime.slice(0, 6) + ',' + startTime.slice(6).substr(0, 8);
        //             endTime = endTime.slice(0, 6) + ',' + endTime.slice(6).substr(0, 8);
        //             data[i].startTime = meridiem(startTime);
        //             data[i].endTime = meridiem(endTime);
        //         }
        //     }

        //     function moneys(number){
        //         var money = $filter('currency')(number);
        //         return money
        //     }

        //     roundNums(data);
        //     function roundNums(data){
        //         for(var i = 0; i < data.length; i++){
        //             data[i].Active_Users = Math.round(data[i].Active_Users * 10) / 10;
        //             data[i].Revenue_Per_Install = Math.round(data[i].Revenue_Per_Install * 10) / 10;
        //             data[i].Revenue_Per_User = Math.round(data[i].Revenue_Per_User * 100) / 100;
        //             data[i].Total_Users = Math.round(data[i].Total_Users * 10) / 10;
        //             data[i].Revenue = Math.round(data[i].Revenue * 100) / 100;
        //             data[i].Revenue = moneys(data[i].Revenue);
        //             data[i].Revenue_Per_User = moneys(data[i].Revenue_Per_User);
        //         }

        //     }
           
        //     console.log(data)
        //     Service.data = data;
        // })
    })