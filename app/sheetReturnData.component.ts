import {Component, Input} from 'angular2/core';

import {Sheet} from './sheet';
import {SheetBackEnd} from './sheetBackEnd.service';
import {ReturnPeriod} from './returnPeriod';

import {Ng2Highcharts} from '../ng2Highcharts/src/directives/ng2-highcharts';
import {Ng2Highstocks} from '../ng2Highcharts/src/directives/ng2-highstocks';

@Component({
    selector: 'sheet-returnData',
	providers: [],
    templateUrl: '../templates/sheetReturnData.html',
    styleUrls: ['../styles/common.css', '../styles/sheetReturnData.css'],
	directives: [Ng2Highstocks, Ng2Highcharts],
    //inputs: ['sheet'],
})
export class SheetReturnData { 
    public sheet: Sheet;
    public chartOptions: any;
    public currentPeriod: ReturnPeriod = ReturnPeriod.lastMonth;
    public complexView: boolean = false;
    
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
        this.currentPeriod = ReturnPeriod.lastMonth;
        this.periodText = 'Ultimo mese';
        this.setSeriesInChartOptions(series);
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
        this.currentPeriod = ReturnPeriod.lastYear;
        this.periodText = 'Ultimo anno';
        this.setSeriesInChartOptions(series);
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
        this.currentPeriod = ReturnPeriod.all;
        this.periodText = 'Da inizio';
        this.setSeriesInChartOptions(series);
    }
    
    createNewchartOptions() {
        return {
            title: {text: "Performance vs Benchmark (" + this.periodText + ")"},
            rangeSelector: {
                selected: 4},
            xAxis: {
                type: 'datetime'
            },
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
    
    setSeriesInChartOptions(inSeries: Array<any>) {
        this.chartOptions = this.createNewchartOptions();
        this.chartOptions.series = inSeries;
    }
    
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
    
    simpleComplexViewToggle() {
        this.complexView = !this.complexView;
        if (this.complexView) {
            let currentPeriodUsedBySimpleChart = this.currentPeriod;  // the following method prepares the data for the 'complex view' (all data) and changes the 'currentPeriod'; 
                                                                        // I want to keep the old current period since it is used only by the 'simple view' 
                                                                        // and I want to have the state unchanged when I switch back to the 'simple view'
            this.setAllSeries();  // with the complex view it makes sense to have the entire set of data
            this.currentPeriod = currentPeriodUsedBySimpleChart;
        }
    }
    
    getSimpleComplexViewText() {
        let text: string;
        if (this.complexView) {
            text = 'Grafico semplice';
        } else {
            text = 'Grafico sofisticato';
        }
        return text;
    }
    
    isLastMonthPeriod() {return this.currentPeriod == ReturnPeriod.lastMonth}
    isLastYearPeriod() {return this.currentPeriod == ReturnPeriod.lastYear}
    isAllPeriod() {return this.currentPeriod == ReturnPeriod.all}
}