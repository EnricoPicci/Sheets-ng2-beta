System.register(['angular2/core', '../ng2Highcharts/src/directives/ng2-highcharts'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_highcharts_1;
    var SheetCompositionCharts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_highcharts_1_1) {
                ng2_highcharts_1 = ng2_highcharts_1_1;
            }],
        execute: function() {
            SheetCompositionCharts = (function () {
                function SheetCompositionCharts() {
                }
                SheetCompositionCharts.prototype.ngOnInit = function () {
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
                    };
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
                    };
                };
                SheetCompositionCharts = __decorate([
                    core_1.Component({
                        selector: 'sheet-compositionCharts',
                        providers: [],
                        template: "\n        <div [ng2-highcharts]=\"highchartsOptionsForGroups\" class=\"compositionChart\"></div>\n        <div [ng2-highcharts]=\"highchartsOptionsForAssets\" class=\"compositionChart\"></div>\n    ",
                        styleUrls: ['../styles/common.css', '../styles/sheetCompositionCharts.css'],
                        directives: [ng2_highcharts_1.Ng2Highcharts],
                        inputs: ['sheet'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], SheetCompositionCharts);
                return SheetCompositionCharts;
            })();
            exports_1("SheetCompositionCharts", SheetCompositionCharts);
        }
    }
});
//# sourceMappingURL=sheetCompositionCharts.component.js.map