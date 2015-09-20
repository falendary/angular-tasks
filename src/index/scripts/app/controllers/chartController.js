(function () {
		
	'use strict';

	module.exports = function () {

		var vm = this; 

		vm.financialCharts =function () {

            var seriesOptions = [],
            seriesCounter = 0,
            names = ['MSFT', 'AAPL', 'GOOG'],
            // create the chart when all data is loaded
            createChart = function () {

                $('#financial-chart').highcharts('StockChart', {
                    chart: {
                        height: 300,
                        borderColor: '#C9625F',
                        backgroundColor: 'transparent'
                    },
                    rangeSelector: {
                        selected: 1,
                        inputEnabled: $('#container').width() > 480
                    },
                    colors: ['#18A689', '#f7a35c', '#8085e9', '#f15c80', '#91e8e1'],
                    credits: {
                        enabled: false
                    },
                    exporting: {
                        enabled: false
                    },
                    scrollbar: {
                        enabled: false
                    },
                    navigator: {
                        enabled: false
                    },
                    xAxis: {
                        lineColor: '#e1e1e1',
                        tickColor: '#EFEFEF',
                    },
                    yAxis: {
                        gridLineColor: '#e1e1e1',
                        labels: {
                            formatter: function () {
                                return (this.value > 0 ? ' + ' : '') + this.value + '%';
                            }
                        },
                        plotLines: [{
                            value: 0,
                            width: 2,
                            color: 'silver'
                        }]
                    },
                    plotOptions: {
                        series: {
                            compare: 'percent'
                        }
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                        valueDecimals: 2
                    },

                    series: seriesOptions
                });
            };

            $.each(names, function (i, name) {

                $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?', function (data) {

                    seriesOptions[i] = {
                        name: name,
                        data: data
                    };
                    seriesCounter += 1;

                    if (seriesCounter === names.length) {
                        createChart();
                    }
                });
            });
        }

        // vm.financialCharts();
	}

}())