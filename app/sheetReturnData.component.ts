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
    public sheet: Sheet;
    public highstocksOptions: any;
    public currentPeriod: ReturnPeriod = ReturnPeriod.lastMonth;
    
    /*isLastMonthPeriod: boolean = false;
    isLastYearPeriod: boolean = false;
    isAllPeriod: boolean = false;*/
    periodText: string;
    
    private _subscriptionToSheetCompositionChange: any;
        
    @Input('sheet') set options(inSheet: Sheet) {
        this.sheet = inSheet;
        this.setLastMonthSeries();
        this._subscriptionToSheetCompositionChange = this.sheet.getChangeCompositionEvent().
                                                        subscribe(inSheet => this.updateReturnData());
    }
        
    constructor(
        private _sheetBackEnd: SheetBackEnd
    ) { }
    
    setLastMonthSeries() {
        if (this.sheet.returnDataLastMonth.isEmpty()) {
            this._sheetBackEnd.fillReturnData(this.sheet, ReturnPeriod.lastMonth);
        }
        let series = new Array<any>();
        series[0] = {
            name: this.sheet.title,
            data: this.sheet.returnDataLastMonth.data
        };
        series[1] = {
            name: this.sheet.benchmark,
            data: this.sheet.returnDataBenchmarkLastMonth.data
        };
        //this.resetPeriodState();
        //this.isLastMonthPeriod = true;
        this.currentPeriod = ReturnPeriod.lastMonth;
        this.periodText = 'Ultimo mese';
        this.setSeriesIntHighstocksOptions(series);
    }
    
    setLastYearSeries() {
        if (this.sheet.returnDataLastYear.isEmpty()) {
            this._sheetBackEnd.fillReturnData(this.sheet, ReturnPeriod.lastYear);
        }
        let series = new Array<any>();
        series[0] = {
            name: this.sheet.title,
            data: this.sheet.returnDataLastYear.data
        };
        series[1] = {
            name: this.sheet.benchmark,
            data: this.sheet.returnDataBenchmarkLastYear.data
        };
        //this.resetPeriodState();
        //this.isLastYearPeriod = true;
        this.currentPeriod = ReturnPeriod.lastYear;
        this.periodText = 'Ultimo anno';
        this.setSeriesIntHighstocksOptions(series);
    }
    
    setAllSeries() {
        if (this.sheet.returnDataAll.isEmpty()) {
            this._sheetBackEnd.fillReturnData(this.sheet, ReturnPeriod.all);
        }
        let series = new Array<any>();
        series[0] = {
            name: this.sheet.title,
            data: this.sheet.returnDataAll.data
        };
        series[1] = {
            name: this.sheet.benchmark,
            data: this.sheet.returnDataBenchmarkAll.data
        };
        //this.resetPeriodState();
        //this.isAllPeriod = true;
        this.currentPeriod = ReturnPeriod.all;
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
    
    /*resetPeriodState() {
        this.isLastMonthPeriod = false;
        this.isLastYearPeriod = false;
        this.isAllPeriod = false;        
    }*/
    
    updateReturnData() {
        this._sheetBackEnd.updateReturnData(this.sheet, this.currentPeriod);
        switch(this.currentPeriod) {
            case ReturnPeriod.lastMonth:
                this.setLastMonthSeries();
                break;
            case ReturnPeriod.lastYear:
                this.setLastYearSeries();
                break;
            case ReturnPeriod.all:
                this.setAllSeries();
                break;                
        }
    }
    
    isLastMonthPeriod() {return this.currentPeriod == ReturnPeriod.lastMonth}
    isLastYearPeriod() {return this.currentPeriod == ReturnPeriod.lastYear}
    isAllPeriod() {return this.currentPeriod == ReturnPeriod.all}
}