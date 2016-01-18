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
                    this._isAssetGroupViewShown = true;
                }
                SheetCompositionCharts.prototype.ngOnInit = function () {
                    var _this = this;
                    this.generateCharts();
                    this._subscriptionToSheetCompositionChange = this.sheet.getChangeCompositionEvent().
                        subscribe(function (inSheet) { return _this.generateCharts(); });
                };
                SheetCompositionCharts.prototype.generateCharts = function () {
                    this.highchartsOptionsForGroups = this.createNewHighstocksOptions('Composizione per Gruppi', 'Distribuzione percentuale sui vari gruppi');
                    this.highchartsOptionsForGroups.series = this.getSeriesForAssetGroups();
                    this.highchartsOptionsForAssets = this.createNewHighstocksOptions('Composizione per Asset', 'Distribuzione percentuale sui vari asset');
                    this.highchartsOptionsForAssets.series = this.getSeriesForAssets();
                };
                SheetCompositionCharts.prototype.createNewHighstocksOptions = function (inTitle, inSubtitle) {
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
                    };
                };
                SheetCompositionCharts.prototype.getSeriesForAssetGroups = function () {
                    var seriesData = new Array();
                    this._primFillSeriesForAssetAbstract(this.sheet.assetGroups, seriesData);
                    var ret = new Array();
                    var series = {
                        name: 'Percentuale',
                        data: seriesData
                    };
                    ret.push(series);
                    return ret;
                };
                SheetCompositionCharts.prototype.getSeriesForAssets = function () {
                    var seriesData = new Array();
                    for (var i = 0; i < this.sheet.assetGroups.length; i++) {
                        var assetGroup = this.sheet.assetGroups[i];
                        this._primFillSeriesForAssetAbstract(assetGroup.assets, seriesData);
                    }
                    var ret = new Array();
                    var series = {
                        name: 'Percentuale',
                        data: seriesData
                    };
                    ret.push(series);
                    return ret;
                };
                SheetCompositionCharts.prototype._primFillSeriesForAssetAbstract = function (inAssetAbstract, inSeries) {
                    for (var i = 0; i < inAssetAbstract.length; i++) {
                        var abstractAsset = inAssetAbstract[i];
                        var data = new Array();
                        data.push(abstractAsset.name);
                        data.push(abstractAsset.weight);
                        inSeries.push(data);
                    }
                };
                SheetCompositionCharts.prototype.toggleView = function () {
                    this._isAssetGroupViewShown = !this._isAssetGroupViewShown;
                };
                SheetCompositionCharts.prototype.getToggleViewText = function () {
                    var ret;
                    if (this._isAssetGroupViewShown) {
                        ret = 'Vista per Assets';
                    }
                    else {
                        ret = 'Vista per Asset Group';
                    }
                    ;
                    return ret;
                };
                SheetCompositionCharts = __decorate([
                    core_1.Component({
                        selector: 'sheet-compositionCharts',
                        providers: [],
                        template: "\n        <div [ng2-highcharts]=\"highchartsOptionsForGroups\" class=\"compositionChart\" [style.display]=\"_isAssetGroupViewShown ? 'block' : 'none'\"></div>\n        <div [ng2-highcharts]=\"highchartsOptionsForAssets\" class=\"compositionChart\" [style.display]=\"_isAssetGroupViewShown ? 'none' : 'block'\"></div>\n        <div><span id=\"toggleViewText\" (click)=\"toggleView()\">{{getToggleViewText()}}</span></div>\n    ",
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