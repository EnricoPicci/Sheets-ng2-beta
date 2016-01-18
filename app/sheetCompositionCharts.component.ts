import {Component, Input} from 'angular2/core';

import {Sheet} from './sheet';

import {Ng2Highcharts} from '../ng2Highcharts/src/directives/ng2-highcharts';

@Component({
    selector: 'sheet-compositionCharts',
	providers: [],
    template: `
        <div [ng2-highcharts]="highchartsOptionsForGroups" class="compositionChart"></div>
        <div [ng2-highcharts]="highchartsOptionsForAssets" class="compositionChart"></div>
    `,
    styleUrls: ['../styles/common.css', '../styles/sheetCompositionCharts.css'],
	directives: [Ng2Highcharts],
    inputs: ['sheet'],
})
export class SheetCompositionCharts { 
    public sheet: Sheet;
    public highchartsOptionsForGroups: HighchartsOptions;
    public highchartsOptionsForAssets: HighchartsOptions;
    
    ngOnInit() {
        this.highchartsOptionsForGroups = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Composizione per Gruppi',
                style: { "fontSize": "12px" }
            },
            subtitle: {
                text: 'Distribuzione percentuale sui vari gruppi',
                style: { "fontSize": "10px" }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Percentuale',
                data: [
                    ['Bananas', 8],
                    ['Kiwi', 3],
                    ['Mixed nuts', 1],
                    ['Oranges', 6],
                    ['Apples', 8],
                    ['Pears', 4],
                    ['Clementines', 4],
                    ['Reddish (bag)', 1],
                    ['Grapes (bunch)', 1]
                ]
            }]
        }
        
        this.highchartsOptionsForAssets = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Composizione per Asset',
                style: { "fontSize": "12px" }
            },
            subtitle: {
                text: 'Distribuzione percentuale sui vari asset',
                style: { "fontSize": "10px" }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Percentuale per Gruppi',
                data: [
                    ['Bananas', 8],
                    ['Kiwi', 3],
                    ['Mixed nuts', 1],
                    ['Oranges', 6],
                    ['Apples', 8],
                    ['Pears', 4],
                    ['Clementines', 4],
                    ['Reddish (bag)', 1],
                    ['Grapes (bunch)', 1]
                ]
            }]
        }
    }
}