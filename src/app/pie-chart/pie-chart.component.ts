import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Matches Details, 2023',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    credits:{
      enabled:false
    },
    series: [{
        name: 'Matches',
        colorByPoint: true,
        data: [{
            name: 'T20',
            y: 70.67,
            sliced: true,
            selected: true
        }, {
            name: 'Worldcup',
            y: 14.77
        },  {
            name: 'Test Matches',
            y: 4.86
        }, {
            name: 'IPL',
            y: 2.63
        }, {
            name: 'One Day International',
            y: 1.53
        }]
    }]
    }
  }
}
