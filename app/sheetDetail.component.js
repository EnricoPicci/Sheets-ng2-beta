System.register(['angular2/core', 'angular2/router', './sheetBackEnd.service', '../utilities/shortLongText.component', '../utilities/slider.component', './sheetWeightAdjuster.service', './sheetReturnData.component', './sheetCompositionCharts.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, sheetBackEnd_service_1, shortLongText_component_1, slider_component_1, sheetWeightAdjuster_service_1, sheetReturnData_component_1, sheetCompositionCharts_component_1;
    var SheetDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sheetBackEnd_service_1_1) {
                sheetBackEnd_service_1 = sheetBackEnd_service_1_1;
            },
            function (shortLongText_component_1_1) {
                shortLongText_component_1 = shortLongText_component_1_1;
            },
            function (slider_component_1_1) {
                slider_component_1 = slider_component_1_1;
            },
            function (sheetWeightAdjuster_service_1_1) {
                sheetWeightAdjuster_service_1 = sheetWeightAdjuster_service_1_1;
            },
            function (sheetReturnData_component_1_1) {
                sheetReturnData_component_1 = sheetReturnData_component_1_1;
            },
            function (sheetCompositionCharts_component_1_1) {
                sheetCompositionCharts_component_1 = sheetCompositionCharts_component_1_1;
            }],
        execute: function() {
            SheetDetailComponent = (function () {
                function SheetDetailComponent(_routeParams, _sheetBackEnd, _sheetWeightAdjuster) {
                    this._routeParams = _routeParams;
                    this._sheetBackEnd = _sheetBackEnd;
                    this._sheetWeightAdjuster = _sheetWeightAdjuster;
                    this.shortDescriptionTextLength = 250;
                    this.editStatus = false;
                    this.startOfScaleRelative = false; // if false, all sliders start from ZERO, otherwise their starting position increases based on the sum of the range of the previous assets
                }
                SheetDetailComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    this.sheet = this._sheetBackEnd.getSheet(id);
                    this._sheetBackEnd.fillDetails(this.sheet);
                };
                SheetDetailComponent.prototype.ngAfterViewInit = function () {
                };
                SheetDetailComponent.prototype.onAssetGroupClick = function (inAssetGroup) {
                    inAssetGroup.show = !inAssetGroup.show;
                };
                SheetDetailComponent.prototype.onClickOverCustomizeButton = function () {
                    this.editStatus = !this.editStatus;
                };
                SheetDetailComponent.prototype.getCustomizeButtonText = function () {
                    var ret;
                    if (this.editStatus) {
                        ret = 'Chiudi';
                    }
                    else {
                        ret = 'Personalizza';
                    }
                    return ret;
                };
                SheetDetailComponent.prototype.onClickOverRelativeScaleButton = function () {
                    this.startOfScaleRelative = !this.startOfScaleRelative;
                    this._sheetWeightAdjuster.setRelativeStartOfScale(this.sheet.assetGroups);
                };
                SheetDetailComponent.prototype.getRelativeScaleButtonText = function () {
                    var ret;
                    if (this.startOfScaleRelative) {
                        ret = 'Scala assoluta';
                    }
                    else {
                        ret = 'Scala relativa';
                    }
                    return ret;
                };
                SheetDetailComponent.prototype.onToggleLock = function (inAsset) {
                    inAsset.setLocked(!inAsset.locked);
                };
                SheetDetailComponent.prototype.getStart = function (inAsset) {
                    return inAsset.weight;
                };
                SheetDetailComponent.prototype.getRange = function (inAsset) {
                    return inAsset.range;
                };
                SheetDetailComponent.prototype.getPips = function (inAsset) {
                    return inAsset.pips;
                };
                SheetDetailComponent.prototype.onEndOnAssetGroup = function (inEvent, inAssetGroup) {
                    var newWeightValue = inEvent[0];
                    this._sheetWeightAdjuster.adjustAfterChangeInAssetGroupWeight(newWeightValue, inAssetGroup);
                    this._sheetWeightAdjuster.setRelativeStartOfScale(this.sheet.assetGroups);
                };
                SheetDetailComponent.prototype.onEndOnAsset = function (inEvent, inAsset) {
                    var newWeightValue = inEvent[0];
                    this._sheetWeightAdjuster.adjustAfterChangeInAssetWeight(newWeightValue, inAsset);
                    this._sheetWeightAdjuster.setRelativeStartOfScale(this.sheet.assetGroups);
                };
                SheetDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'sheet-detail',
                        providers: [],
                        templateUrl: '../templates/sheetDetail.html',
                        styleUrls: ['../styles/common.css', '../styles/sheetDetail.css'],
                        directives: [shortLongText_component_1.ShortLongTextComponent, slider_component_1.Slider, sheetReturnData_component_1.SheetReturnData, sheetCompositionCharts_component_1.SheetCompositionCharts],
                        inputs: ['sheet'],
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, sheetBackEnd_service_1.SheetBackEnd, sheetWeightAdjuster_service_1.SheetWeightAdjuster])
                ], SheetDetailComponent);
                return SheetDetailComponent;
            })();
            exports_1("SheetDetailComponent", SheetDetailComponent);
        }
    }
});
//# sourceMappingURL=sheetDetail.component.js.map