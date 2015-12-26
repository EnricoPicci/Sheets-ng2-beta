System.register(['angular2/core', '../app/SheetFactory', '../app/SheetCmp', '../app/CollectionOfSheetsCmp', '../app/SheetSearchCmp'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, SheetFactory_1, SheetCmp_1, CollectionOfSheetsCmp_1, SheetSearchCmp_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SheetFactory_1_1) {
                SheetFactory_1 = SheetFactory_1_1;
            },
            function (SheetCmp_1_1) {
                SheetCmp_1 = SheetCmp_1_1;
            },
            function (CollectionOfSheetsCmp_1_1) {
                CollectionOfSheetsCmp_1 = CollectionOfSheetsCmp_1_1;
            },
            function (SheetSearchCmp_1_1) {
                SheetSearchCmp_1 = SheetSearchCmp_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(inSheetService) {
                    this.title = 'Sheets';
                    this.sheetService = inSheetService;
                    this.firstSheet = inSheetService.getSheet('sheet1.jpg');
                    this.sheets = inSheetService.getSomeSheets(0, 16);
                }
                AppComponent.prototype.getSheets = function () {
                    return this.sheets;
                };
                AppComponent.prototype.load = function () {
                    this.sheets = this.sheetService.getSomeSheets(4, 7);
                    console.log(this.sheets[1].longTitle);
                };
                AppComponent.prototype.updateSheets = function (searchResult) {
                    //console.log('it is me');
                    //console.log(searchResult);
                    this.sheets = searchResult;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [CollectionOfSheetsCmp_1.CollectionOfSheetsCmp],
                        templateUrl: '../templates/app.html',
                        styleUrls: ['../styles/app.css'],
                        directives: [CollectionOfSheetsCmp_1.CollectionOfSheetsCmp, SheetCmp_1.SheetCmp, SheetSearchCmp_1.SheetSearchCmp],
                    }), 
                    __metadata('design:paramtypes', [SheetFactory_1.SheetFactory])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//bootstrap(AppComponent, [provide(SheetFactory, {useClass: SheetFactory})]);
//bootstrap(AppComponent, [SheetFactory]); 
//# sourceMappingURL=appCmp.js.map