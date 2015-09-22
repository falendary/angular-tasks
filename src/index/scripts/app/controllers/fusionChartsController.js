(function () {

    'use strict';

    module.exports = function ($scope) {

        $scope.myDataSource = {
            chart: {
                caption: "Age profile of website visitors",
                subcaption: "Last Year",
                startingangle: "120",
                showlabels: "0",
                showlegend: "1",
                enablemultislicing: "0",
                slicingdistance: "15",
                showpercentvalues: "1",
                showpercentintooltip: "0",
                plottooltext: "Age group : $label Total visit : $datavalue",
                theme: "fint"
            },
            data: [
                {
                    label: "Teenage",
                    value: "1250400"
                },
                {
                    label: "Adult",
                    value: "1463300"
                },
                {
                    label: "Mid-age",
                    value: "1050700"
                },
                {
                    label: "Senior",
                    value: "491000"
                }
            ]
        };

        $scope.lineChart = {
            "chart": {
                "caption": "Website Visitors",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "Visitors",
                "anchorRadius": "5",
                "showValues": "0",
                //Vertical divline configuration
                "numVDivLines": "5",
                "vDivLineColor": "#99ccff",
                "vDivLineThickness": "1",
                "vDivLineAlpha": "50",
                "vDivLineIsDashed": "0",
                //Theme
                "theme": "fint"
            },
            "data": [
                {
                    "label": "Mon",
                    "value": "5123"
                },
                {
                    "label": "Tue",
                    "value": "4233"
                },
                {
                    "label": "Wed",
                    "value": "5507"
                },
                {
                    "label": "Thu",
                    "value": "4110"
                },
                {
                    "label": "Fri",
                    "value": "5529"
                },
                {
                    "label": "Sat",
                    "value": "5803"
                },
                {
                    "label": "Sun",
                    "value": "6202"
                }
            ]
        }

        $scope.areaChart = {
            "chart": {
            "caption": "Sales of Liquor",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "Sales (In USD)",
                "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "plotBorderAlpha": "10",
                "usePlotGradientColor": "0",
                "plotFillAlpha": "50",
                "showXAxisLine": "1",
                "axisLineAlpha": "25",
                "divLineAlpha": "10",
                "showValues": "1",
                "showAlternateHGridColor": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5"
        },

            "data": [
            {
                "label": "Mon",
                "value": "4123"
            },
            {
                "label": "Tue",
                "value": "4633"
            },
            {
                "label": "Wed",
                "value": "5507"
            },
            {
                "label": "Thu",
                "value": "4910"
            },
            {
                "label": "Fri",
                "value": "5529"
            },
            {
                "label": "Sat",
                "value": "5803"
            },
            {
                "label": "Sun",
                "value": "6202"
            }
        ]
        }
    }

}());