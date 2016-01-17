import {Component, Input} from 'angular2/core';

import {Sheet} from './sheet';
import {SheetBackEnd} from './sheetBackEnd.service';
import {ReturnPeriod} from './returnPeriod';

import {Ng2Highstocks} from '../ng2Highcharts/src/directives/ng2-highstocks';


@Component({
    selector: 'sheet-returnData',
	providers: [],
    template: `
        <div [ng2-highstocks]="highstocksOptions" class="graph"></div>
    `,
    //styleUrls: ['../styles/common.css', '../styles/sheetReturnData.css'],
	directives: [Ng2Highstocks],
    //inputs: ['sheet'],
})
export class SheetReturnData { 
    public mySheet: Sheet;
    public highstocksOptions: Object;
    
    @Input('sheet') set options(inSheet: Sheet) {
        this.mySheet = inSheet;
        if (this.mySheet.returnDataLastMonth == null) {
            this._sheetBackEnd.fillReturnData(this.mySheet, ReturnPeriod.lastMonth);
        }
        let seriesOptions = new Array<any>();
        seriesOptions[0] = {
            name: this.mySheet.title,
            data: this.mySheet.returnDataLastMonth.data
        };
        seriesOptions[1] = {
            name: this.mySheet.benchmark,
            data: this.mySheet.returnDataBenchmarkLastMonth.data
        };
        this.highstocksOptions = {
            rangeSelector: {
                selected: 4},
            yAxis: {
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value + '%';}
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'}]
            },
            plotOptions: {
                series: {
                    compare: 'percent'}
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2},
            series: seriesOptions
        }
    }
        
    constructor(
        private _sheetBackEnd: SheetBackEnd
    ) { }
   
    
}