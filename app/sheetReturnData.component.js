System.register(['angular2/core', './sheet', './sheetBackEnd.service', './returnPeriod', '../ng2Highcharts/src/directives/ng2-highstocks'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sheet_1, sheetBackEnd_service_1, returnPeriod_1, ng2_highstocks_1;
    var SheetReturnData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sheet_1_1) {
                sheet_1 = sheet_1_1;
            },
            function (sheetBackEnd_service_1_1) {
                sheetBackEnd_service_1 = sheetBackEnd_service_1_1;
            },
            function (returnPeriod_1_1) {
                returnPeriod_1 = returnPeriod_1_1;
            },
            function (ng2_highstocks_1_1) {
                ng2_highstocks_1 = ng2_highstocks_1_1;
            }],
        execute: function() {
            SheetReturnData = (function () {
                function SheetReturnData(_sheetBackEnd) {
                    this._sheetBackEnd = _sheetBackEnd;
                    this.currentPeriod = returnPeriod_1.ReturnPeriod.lastMonth;
                }
                Object.defineProperty(SheetReturnData.prototype, "options", {
                    set: function (inSheet) {
                        var _this = this;
                        this.sheet = inSheet;
                        this.setLastMonthSeries();
                        this._subscriptionToSheetCompositionChange = this.sheet.getChangeCompositionEvent().
                            subscribe(function (inSheet) { return _this.updateReturnData(); });
                    },
                    enumerable: true,
                    configurable: true
                });
                SheetReturnData.prototype.setLastMonthSeries = function () {
                    if (this.sheet.returnDataLastMonth.isEmpty()) {
                        this._sheetBackEnd.fillReturnData(this.sheet, returnPeriod_1.ReturnPeriod.lastMonth);
                    }
                    var series = new Array();
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
                    this.currentPeriod = returnPeriod_1.ReturnPeriod.lastMonth;
                    this.periodText = 'Ultimo mese';
                    this.setSeriesIntHighstocksOptions(series);
                };
                SheetReturnData.prototype.setLastYearSeries = function () {
                    if (this.sheet.returnDataLastYear.isEmpty()) {
                        this._sheetBackEnd.fillReturnData(this.sheet, returnPeriod_1.ReturnPeriod.lastYear);
                    }
                    var series = new Array();
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
                    this.currentPeriod = returnPeriod_1.ReturnPeriod.lastYear;
                    this.periodText = 'Ultimo anno';
                    this.setSeriesIntHighstocksOptions(series);
                };
                SheetReturnData.prototype.setAllSeries = function () {
                    if (this.sheet.returnDataAll.isEmpty()) {
                        this._sheetBackEnd.fillReturnData(this.sheet, returnPeriod_1.ReturnPeriod.all);
                    }
                    var series = new Array();
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
                    this.currentPeriod = returnPeriod_1.ReturnPeriod.all;
                    this.periodText = 'Da inizio';
                    this.setSeriesIntHighstocksOptions(series);
                };
                SheetReturnData.prototype.createNewHighstocksOptions = function () {
                    return {
                        title: { text: "Performance vs Benchmark (" + this.periodText + ")" },
                        rangeSelector: {
                            selected: 4 },
                        yAxis: {
                            labels: {
                                formatter: function () {
                                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                                }
                            },
                            plotLines: [{
                                    value: 0,
                                    width: 2,
                                    color: 'silver' }]
                        },
                        plotOptions: {
                            series: {
                                compare: 'percent' }
                        },
                        tooltip: {
                            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                            valueDecimals: 2 }
                    };
                };
                SheetReturnData.prototype.setSeriesIntHighstocksOptions = function (inSeries) {
                    this.highstocksOptions = this.createNewHighstocksOptions();
                    this.highstocksOptions.series = inSeries;
                };
                /*resetPeriodState() {
                    this.isLastMonthPeriod = false;
                    this.isLastYearPeriod = false;
                    this.isAllPeriod = false;
                }*/
                SheetReturnData.prototype.updateReturnData = function () {
                    this._sheetBackEnd.updateReturnData(this.sheet, this.currentPeriod);
                    switch (this.currentPeriod) {
                        case returnPeriod_1.ReturnPeriod.lastMonth:
                            this.setLastMonthSeries();
                            break;
                        case returnPeriod_1.ReturnPeriod.lastYear:
                            this.setLastYearSeries();
                            break;
                        case returnPeriod_1.ReturnPeriod.all:
                            this.setAllSeries();
                            break;
                    }
                };
                SheetReturnData.prototype.isLastMonthPeriod = function () { return this.currentPeriod == returnPeriod_1.ReturnPeriod.lastMonth; };
                SheetReturnData.prototype.isLastYearPeriod = function () { return this.currentPeriod == returnPeriod_1.ReturnPeriod.lastYear; };
                SheetReturnData.prototype.isAllPeriod = function () { return this.currentPeriod == returnPeriod_1.ReturnPeriod.all; };
                __decorate([
                    core_1.Input('sheet'), 
                    __metadata('design:type', sheet_1.Sheet), 
                    __metadata('design:paramtypes', [sheet_1.Sheet])
                ], SheetReturnData.prototype, "options", null);
                SheetReturnData = __decorate([
                    core_1.Component({
                        selector: 'sheet-returnData',
                        providers: [],
                        templateUrl: '../templates/sheetReturnData.html',
                        styleUrls: ['../styles/common.css'],
                        directives: [ng2_highstocks_1.Ng2Highstocks],
                    }), 
                    __metadata('design:paramtypes', [sheetBackEnd_service_1.SheetBackEnd])
                ], SheetReturnData);
                return SheetReturnData;
            })();
            exports_1("SheetReturnData", SheetReturnData);
        }
    }
});
//# sourceMappingURL=sheetReturnData.component.js.map