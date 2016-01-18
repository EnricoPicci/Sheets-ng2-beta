import {Component, Input} from 'angular2/core';

import {Sheet} from './sheet';
import {Asset} from './asset';
import {AssetGroup} from './assetGroup';
import {AssetAbstract} from './assetAbstract';

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
        this.highchartsOptionsForGroups = this.createNewHighstocksOptions('Composizione per Gruppi', 
                                                                            'Distribuzione percentuale sui vari gruppi');
        this.highchartsOptionsForGroups.series = this.getSeriesForAssetGroups();
        
        this.highchartsOptionsForAssets = this.createNewHighstocksOptions('Composizione per Asset', 
                                                                            'Distribuzione percentuale sui vari gruppi');
        this.highchartsOptionsForAssets.series = this.getSeriesForAssets();
        console.log(this.highchartsOptionsForGroups);
        console.log(this.highchartsOptionsForAssets);
    }
    
    createNewHighstocksOptions(inTitle: string, inSubtitle: string) {
        return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: inTitle,
                style: { "fontSize": "12px" }
            },
            subtitle: {
                text: inSubtitle,
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
            }
        }
    }
    
    getSeriesForAssetGroups() {
        let seriesData = new Array<any>();
        this._primFillSeriesForAssetAbstract(this.sheet.assetGroups, seriesData);
        let ret = new Array<any>();
        let series = {
            name: 'Percentuale',
            data: seriesData
        };
        ret.push(series);
        return ret;
    }
    
    getSeriesForAssets() {
        let seriesData = new Array<any>();
        for (var i = 0; i < this.sheet.assetGroups.length; i++) {
            let assetGroup = this.sheet.assetGroups[i];
            this._primFillSeriesForAssetAbstract(assetGroup.assets, seriesData);
        }
        let ret = new Array<any>();
        let series = {
            name: 'Percentuale',
            data: seriesData
        };
        ret.push(series);
        return ret;     
    }
    
    private _primFillSeriesForAssetAbstract(inAssetAbstract: AssetAbstract[], inSeries: Array<any>) {
        for (var i = 0; i < inAssetAbstract.length; i++) {
            let abstractAsset = inAssetAbstract[i];
            let data = new Array<any>();
            data.push(abstractAsset.name);
            data.push(abstractAsset.weight);
            inSeries.push(data);
        }
    }
}