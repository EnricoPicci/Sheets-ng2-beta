System.register(['angular2/core', 'angular2/router', './sheetFactory'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, sheetFactory_1;
    var SheetSummaryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sheetFactory_1_1) {
                sheetFactory_1 = sheetFactory_1_1;
            }],
        execute: function() {
            SheetSummaryComponent = (function () {
                function SheetSummaryComponent(inService, inRouter, inRouteParams) {
                    this._service = inService;
                    this._router = inRouter;
                    this._routeParams = inRouteParams;
                }
                SheetSummaryComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    console.log(id);
                    if (id) {
                        this.sheet = this._service.getSomeSheets(id, 1)[0];
                        console.log(this.sheet);
                    }
                };
                SheetSummaryComponent.prototype.onMouseDown = function () {
                    console.log(this.sheet);
                    this._router.navigate(['SheetDetail', { id: this.sheet.id }]);
                };
                SheetSummaryComponent = __decorate([
                    core_1.Component({
                        selector: 'sheet-summary',
                        providers: [],
                        templateUrl: '../templates/sheetSummary.html',
                        styleUrls: ['../styles/sheetSummary.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        inputs: ['sheet', 'sheetId'],
                    }), 
                    __metadata('design:paramtypes', [sheetFactory_1.SheetFactory, router_1.Router, router_1.RouteParams])
                ], SheetSummaryComponent);
                return SheetSummaryComponent;
            })();
            exports_1("SheetSummaryComponent", SheetSummaryComponent);
        }
    }
});
//# sourceMappingURL=sheetSummary.component.js.map