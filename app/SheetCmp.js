System.register(['angular2/core', '../app/Sheet'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Sheet_1;
    var SheetCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sheet_1_1) {
                Sheet_1 = Sheet_1_1;
            }],
        execute: function() {
            SheetCmp = (function () {
                function SheetCmp() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Sheet_1.Sheet)
                ], SheetCmp.prototype, "sheet", void 0);
                SheetCmp = __decorate([
                    core_1.Component({
                        selector: 'sheetCmp',
                        providers: [],
                        template: "\n    \t<div>\n\t\t\t<h1>{{sheet.title}}</h1>\n\t\t\t<h2>{{sheet.longTitle}}</h2>\n\t\t\t<image src= {{sheet.imageUrl}}></image>\n\t\t</div>\n\t\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], SheetCmp);
                return SheetCmp;
            })();
            exports_1("SheetCmp", SheetCmp);
        }
    }
});
//# sourceMappingURL=SheetCmp.js.map