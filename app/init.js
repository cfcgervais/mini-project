angular.module('project', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/components/home/home.html',
                controller: 'homeController'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'app/components/tables/tables.html'
                
            })
            .state('charts', {
                url: '/charts',
                templateUrl: 'app/components/charts/charts.html',
                controller: 'chartsController'
            })
    })
    .factory('Service', function($http, $filter){
        var Service = {
            data: []
        }
         $http.get('overview.json').success(function(data){
            
            function meridiem(str){
                var res;
                var hour = str[13] + str[14];
                if(hour > 12){
                    var newHour = hour - 12;
                    res = str.slice(0, 13) + newHour + str.slice(15);
                    res += 'pm';
                }else if(hour === '00'){
                    res = str.replace(hour, '12');
                    res += 'am';
                }else{
                    res = str + 'am';
                };
                return res;
            }

            function chartTime(str){
                var res = str.substr(13);
                return res
            }

            formatDate(data);
            function formatDate(data){
                for(var i = 0; i < data.length; i++){
                    data[i].hour = i + 1;
                    var startTime = String(new Date(data[i].TimeSegment.start));
                    var endTime = String(new Date(data[i].TimeSegment.end));
                    startTime = startTime.substring(4);
                    endTime = endTime.substring(4);
                    startTime = startTime.slice(0, 6) + ',' + startTime.slice(6).substr(0, 8);
                    endTime = endTime.slice(0, 6) + ',' + endTime.slice(6).substr(0, 8);
                    data[i].startTime = meridiem(startTime);
                    data[i].endTime = meridiem(endTime);
                    data[i].chartTime = chartTime(data[i].startTime);
                }
            }

            function moneys(number){
                var money = $filter('currency')(number);
                return money
            }

            roundNums(data);
            function roundNums(data){
                for(var i = 0; i < data.length; i++){
                    data[i].Active_Users = Math.round(data[i].Active_Users * 100) / 100;
                    data[i].Revenue_Per_Install = Math.round(data[i].Revenue_Per_Install * 100) / 100;
                    data[i].Revenue_Per_User = Math.round(data[i].Revenue_Per_User * 100) / 100;
                    data[i].Total_Users = Math.round(data[i].Total_Users * 100) / 100;
                    data[i].Formatted_Revenue = Math.round(data[i].Revenue * 100) / 100;
                    data[i].Formatted_Revenue = moneys(data[i].Formatted_Revenue);
                    data[i].Revenue_Per_User = moneys(data[i].Revenue_Per_User);
                }

            }

            donutData(data);
            function donutData(data){
                var totalNew = 0;
                var totalActive = 0;
                var totalTotal = 0;
                for(var i = 0; i < data.length; i++){
                    totalNew += data[i].New_Users;
                    totalActive += data[i].Active_Users;
                    totalTotal += data[i].Total_Users;
                }
                totalActive = Math.round(totalActive * 100) / 100;
                var inactive = totalTotal - totalActive;
                inactive = Math.round(inactive * 100) / 100;
                data.Donut_Data = [
                    {
                        "category": "New Users",
                        "value": totalNew
                    },
                    {
                        "category": "Active Users",
                        "value": totalActive 
                    },
                    {
                        "category": "Inactive Users",
                        "value": inactive
                    }
                ]
            }

            Service.data = data;
        })
        return Service;
    })