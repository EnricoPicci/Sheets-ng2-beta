System.register(['angular2/core', 'angular2/router', './sheetBackEnd.service', '../utilities/shortLongText.component', './sheetReturnData.component', './sheetCompositionCharts.component', './sheetAssetComposition.component', './sheetInfo.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, sheetBackEnd_service_1, shortLongText_component_1, sheetReturnData_component_1, sheetCompositionCharts_component_1, sheetAssetComposition_component_1, sheetInfo_component_1;
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
            function (sheetReturnData_component_1_1) {
                sheetReturnData_component_1 = sheetReturnData_component_1_1;
            },
            function (sheetCompositionCharts_component_1_1) {
                sheetCompositionCharts_component_1 = sheetCompositionCharts_component_1_1;
            },
            function (sheetAssetComposition_component_1_1) {
                sheetAssetComposition_component_1 = sheetAssetComposition_component_1_1;
            },
            function (sheetInfo_component_1_1) {
                sheetInfo_component_1 = sheetInfo_component_1_1;
            }],
        execute: function() {
            SheetDetailComponent = (function () {
                function SheetDetailComponent(_router, _routeParams, _sheetBackEnd) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._sheetBackEnd = _sheetBackEnd;
                    this.sheets = new Array();
                    this.shortDescriptionTextLength = 250;
                }
                SheetDetailComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    this.sheet = this._sheetBackEnd.getSheet(id);
                    this._sheetBackEnd.fillDetails(this.sheet);
                    this.sheets[0] = this.sheet;
                };
                SheetDetailComponent.prototype.onClickOverCompareButton = function () {
                    this._router.navigate(['SheetDashboard', { idOfFirstSheetToCompare: this.sheet.id }]);
                };
                SheetDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'sheet-detail',
                        providers: [],
                        templateUrl: '../templates/sheetDetail.html',
                        styleUrls: ['../styles/common.css', '../styles/sheetDetail.css'],
                        directives: [shortLongText_component_1.ShortLongTextComponent, sheetAssetComposition_component_1.SheetAssetCompositionComponent, sheetReturnData_component_1.SheetReturnData, sheetCompositionCharts_component_1.SheetCompositionCharts, sheetInfo_component_1.SheetInfoComponent],
                        inputs: ['sheet'],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, sheetBackEnd_service_1.SheetBackEnd])
                ], SheetDetailComponent);
                return SheetDetailComponent;
            })();
            exports_1("SheetDetailComponent", SheetDetailComponent);
        }
    }
});
//# sourceMappingURL=sheetDetail.component.js.map