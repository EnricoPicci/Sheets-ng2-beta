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
                }
                Object.defineProperty(SheetReturnData.prototype, "options", {
                    set: function (inSheet) {
                        this.mySheet = inSheet;
                        if (this.mySheet.returnDataLastMonth == null) {
                            this._sheetBackEnd.fillReturnData(this.mySheet, returnPeriod_1.ReturnPeriod.lastMonth);
                        }
                        var seriesOptions = new Array();
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
                                valueDecimals: 2 },
                            series: seriesOptions
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input('sheet'), 
                    __metadata('design:type', sheet_1.Sheet), 
                    __metadata('design:paramtypes', [sheet_1.Sheet])
                ], SheetReturnData.prototype, "options", null);
                SheetReturnData = __decorate([
                    core_1.Component({
                        selector: 'sheet-returnData',
                        providers: [],
                        template: "\n        <div [ng2-highstocks]=\"highstocksOptions\" class=\"graph\"></div>\n    ",
                        //styleUrls: ['../styles/common.css', '../styles/sheetReturnData.css'],
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