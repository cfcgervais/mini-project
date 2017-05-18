angular.module('project')
    .component('chartsComponent', {
        controller: 'chartsController',
        templateUrl: 'app/components/charts/charts.html'
    })
    .controller('chartsController', function($state, $scope, Service){

        var chartData = Service.data
        console.log(chartData)

        AmCharts.makeChart( "linediv", {
            "type": "serial",
            "theme": "light",
            "legend": {
                "useGraphSettings": true
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 10,
                    "text": "Revenue vs Events, Oct 29, 2015 to Oct 30, 2015 (PST)"
                }
            ],
            "dataProvider": chartData,
            "synchronizeGrid":true,
            "valueAxes": [{
                "id":"v1",
                "axisColor": "#FF6600",
                "axisThickness": 2,
                "axisAlpha": 1,
                "position": "left"
            },{
                "id":"v3",
                "axisColor": "#B0DE09",
                "axisThickness": 2,
                "gridAlpha": 0,
                "offset": 0,
                "axisAlpha": 1,
                "position": "right"
            }],
            "graphs": [{
                "valueAxis": "v1",
                "lineColor": "#FF6600",
                "bullet": "round",
                "bulletBorderThickness": 1,
                "hideBulletsCount": 30,
                "title": "Revenue",
                "valueField": "Revenue",
                "fillAlphas": 0
            }, {
                "valueAxis": "v3",
                "lineColor": "#B0DE09",
                "bullet": "triangleUp",
                "bulletBorderThickness": 1,
                "hideBulletsCount": 30,
                "title": "Events",
                "valueField": "Events",
                "fillAlphas": 0
            }],
            // "chartScrollbar": {},
            "chartCursor": {
                "cursorPosition": "mouse"
            },
            "categoryField": "chartTime",
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });

        AmCharts.makeChart('donutdiv', {
            "type": "pie",
            "angle": 12,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "depth3D": 15,
            "innerRadius": "40%",
            "titleField": "category",
            "valueField": "value",
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "align": "center",
                "markerType": "circle"
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 10,
                    "text": "Acitve, Inactive, and New Users"
                }
            ],
            "dataProvider": chartData.Donut_Data
        });
    });