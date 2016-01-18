import {Component, Input} from 'angular2/core';

import {Sheet} from './sheet';
import {SheetBackEnd} from './sheetBackEnd.service';
import {ReturnPeriod} from './returnPeriod';

import {Ng2Highstocks} from '../ng2Highcharts/src/directives/ng2-highstocks';

@Component({
    selector: 'sheet-returnData',
	providers: [],
    templateUrl: '../templates/sheetReturnData.html',
    styleUrls: ['../styles/common.css'],
	directives: [Ng2Highstocks],
    //inputs: ['sheet'],
})
export class SheetReturnData { 
    public mySheet: Sheet;
    public highstocksOptions: any;
    
    isLastMonthPeriod: boolean = false;
    isLastYearPeriod: boolean = false;
    isAllPeriod: boolean = false;
    periodText: string;
    
    @Input('sheet') set options(inSheet: Sheet) {
        this.mySheet = inSheet;
        this.setLastMonthSeries();
    }
        
    constructor(
        private _sheetBackEnd: SheetBackEnd
    ) { }
    
    setLastMonthSeries() {
        if (this.mySheet.returnDataLastMonth.isEmpty) {
            this._sheetBackEnd.fillReturnData(this.mySheet, ReturnPeriod.lastMonth);
        }
        let series = new Array<any>();
        series[0] = {
            name: this.mySheet.title,
            data: this.mySheet.returnDataLastMonth.data
        };
        series[1] = {
            name: this.mySheet.benchmark,
            data: this.mySheet.returnDataBenchmarkLastMonth.data
        };
        this.resetPeriodState();
        this.isLastMonthPeriod = true;
        this.periodText = 'Ultimo mese';
        this.setSeriesIntHighstocksOptions(series);
    }
    
    setLastYearSeries() {
        if (this.mySheet.returnDataLastYear.isEmpty) {
            this._sheetBackEnd.fillReturnData(this.mySheet, ReturnPeriod.lastYear);
        }
        let series = new Array<any>();
        series[0] = {
            name: this.mySheet.title,
            data: this.mySheet.returnDataLastYear.data
        };
        series[1] = {
            name: this.mySheet.benchmark,
            data: this.mySheet.returnDataBenchmarkLastYear.data
        };
        this.resetPeriodState();
        this.isLastYearPeriod = true;
        this.periodText = 'Ultimo anno';
        this.setSeriesIntHighstocksOptions(series);
    }
    
    setAllSeries() {
        if (this.mySheet.returnDataAll.isEmpty) {
            this._sheetBackEnd.fillReturnData(this.mySheet, ReturnPeriod.all);
        }
        let series = new Array<any>();
        series[0] = {
            name: this.mySheet.title,
            data: this.mySheet.returnDataAll.data
        };
        series[1] = {
            name: this.mySheet.benchmark,
            data: this.mySheet.returnDataBenchmarkAll.data
        };
        this.resetPeriodState();
        this.isAllPeriod = true;
        this.periodText = 'Da inizio';
        this.setSeriesIntHighstocksOptions(series);
    }
    
    createNewHighstocksOptions() {
        return {
            title: {text: "Performance vs Benchmark (" + this.periodText + ")"},
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
                valueDecimals: 2}
        };
    }
    
    setSeriesIntHighstocksOptions(inSeries: Array<any>) {
        this.highstocksOptions = this.createNewHighstocksOptions();
        this.highstocksOptions.series = inSeries;
    }
    
    resetPeriodState() {
        this.isLastMonthPeriod = false;
        this.isLastYearPeriod = false;
        this.isAllPeriod = false;        
    }
}