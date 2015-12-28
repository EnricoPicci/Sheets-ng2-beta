System.register(['angular2/core', './sheetFactory', './collectionOfSheetsCmp', './sheetSearchCmp'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sheetFactory_1, collectionOfSheetsCmp_1, sheetSearchCmp_1;
    var SheetDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sheetFactory_1_1) {
                sheetFactory_1 = sheetFactory_1_1;
            },
            function (collectionOfSheetsCmp_1_1) {
                collectionOfSheetsCmp_1 = collectionOfSheetsCmp_1_1;
            },
            function (sheetSearchCmp_1_1) {
                sheetSearchCmp_1 = sheetSearchCmp_1_1;
            }],
        execute: function() {
            SheetDashboardComponent = (function () {
                function SheetDashboardComponent(inSheetService) {
                    this.title = 'Sheets';
                    this.sheetService = inSheetService;
                    //this.firstSheet = inSheetService.getSheet('sheet1.jpg');
                    this.sheets = inSheetService.getSomeSheets(0, 16);
                }
                SheetDashboardComponent.prototype.getSheets = function () {
                    return this.sheets;
                };
                SheetDashboardComponent.prototype.load = function () {
                    this.sheets = this.sheetService.getSomeSheets(4, 7);
                    console.log(this.sheets[1].longTitle);
                };
                SheetDashboardComponent.prototype.updateSheets = function (searchResult) {
                    //console.log('it is me');
                    //console.log(searchResult);
                    this.sheets = searchResult;
                };
                SheetDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'sheet-dashboard',
                        providers: [],
                        templateUrl: '../templates/sheetDashboard.html',
                        styleUrls: ['../styles/app.css'],
                        directives: [collectionOfSheetsCmp_1.CollectionOfSheetsCmp, sheetSearchCmp_1.SheetSearchCmp],
                    }), 
                    __metadata('design:paramtypes', [sheetFactory_1.SheetFactory])
                ], SheetDashboardComponent);
                return SheetDashboardComponent;
            })();
            exports_1("SheetDashboardComponent", SheetDashboardComponent);
        }
    }
});
//bootstrap(AppComponent, [provide(SheetFactory, {useClass: SheetFactory})]);
//bootstrap(AppComponent, [SheetFactory]); 
//# sourceMappingURL=sheetDashboard.component.js.map