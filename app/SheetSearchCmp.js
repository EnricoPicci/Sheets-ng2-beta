System.register(['angular2/core', '../app/SheetSearchCriteria', '../app/SheetFactory'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, SheetSearchCriteria_1, SheetFactory_1;
    var SheetSearchCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SheetSearchCriteria_1_1) {
                SheetSearchCriteria_1 = SheetSearchCriteria_1_1;
            },
            function (SheetFactory_1_1) {
                SheetFactory_1 = SheetFactory_1_1;
            }],
        execute: function() {
            SheetSearchCmp = (function () {
                function SheetSearchCmp(inSheetService) {
                    this.sheetsRetrieved = new core_1.EventEmitter();
                    this.sheetSearchCriteria = new SheetSearchCriteria_1.SheetSearchCriteria(inSheetService);
                }
                SheetSearchCmp.prototype.onChange = function (selected, selection) {
                    selection.selected = selected;
                    var criteria;
                    criteria = this.sheetSearchCriteria.getGeneralDomain();
                    var generalTags = new Array();
                    this.retrieveSelectedCriteria(criteria, generalTags);
                    console.log('generalTags');
                    console.log(generalTags);
                    criteria = this.sheetSearchCriteria.getValueBasedDomain();
                    var valueBasedTags = new Array();
                    this.retrieveSelectedCriteria(criteria, valueBasedTags);
                    console.log('valueBasedTags');
                    console.log(valueBasedTags);
                    criteria = this.sheetSearchCriteria.getSectorsDomain();
                    var sectorsTags = new Array();
                    this.retrieveSelectedCriteria(criteria, sectorsTags);
                    console.log('sectorsTags');
                    console.log(sectorsTags);
                    var fact = new SheetFactory_1.SheetFactory();
                    this.searchResult = fact.fetchSheets(null, generalTags, valueBasedTags, sectorsTags);
                    this.sheetsRetrieved.next(this.searchResult);
                };
                SheetSearchCmp.prototype.retrieveSelectedCriteria = function (inCriteria, inTags) {
                    for (var i = 0; i < inCriteria.length; i++) {
                        if (inCriteria[i].selected) {
                            inTags[i] = inCriteria[i].name;
                        }
                    }
                };
                SheetSearchCmp.prototype.onClick = function () {
                    console.log('click');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SheetSearchCmp.prototype, "sheetsRetrieved", void 0);
                SheetSearchCmp = __decorate([
                    core_1.Component({
                        selector: 'sheetSearchCmp',
                        providers: [],
                        templateUrl: '../templates/sheetSearch.html',
                        styleUrls: ['../styles/sheetSearch.css'],
                    }), 
                    __metadata('design:paramtypes', [SheetFactory_1.SheetFactory])
                ], SheetSearchCmp);
                return SheetSearchCmp;
            })();
            exports_1("SheetSearchCmp", SheetSearchCmp);
        }
    }
});
//# sourceMappingURL=SheetSearchCmp.js.map