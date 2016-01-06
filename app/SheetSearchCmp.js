System.register(['angular2/core', './sheetSearchCriteria', './searchCriteria.component', './sheetFactory'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sheetSearchCriteria_1, searchCriteria_component_1, sheetFactory_1;
    var SheetSearchCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sheetSearchCriteria_1_1) {
                sheetSearchCriteria_1 = sheetSearchCriteria_1_1;
            },
            function (searchCriteria_component_1_1) {
                searchCriteria_component_1 = searchCriteria_component_1_1;
            },
            function (sheetFactory_1_1) {
                sheetFactory_1 = sheetFactory_1_1;
            }],
        execute: function() {
            SheetSearchCmp = (function () {
                function SheetSearchCmp(inSheetService) {
                    this.sheetsRetrieved = new core_1.EventEmitter();
                    this.sheetSearchCriteria = new sheetSearchCriteria_1.SheetSearchCriteria(inSheetService);
                }
                SheetSearchCmp.prototype.ngOnInit = function () {
                    this.sheetSearchCriteria.initializeSearchCriteria();
                    console.log(this.sheetSearchCriteria);
                };
                SheetSearchCmp.prototype.onChange = function (inSearchCriteria) {
                    var criteria;
                    criteria = this.sheetSearchCriteria.searchCriteria[0];
                    var generalTags = new Array();
                    this.retrieveSelectedCriteria(criteria, generalTags);
                    console.log('generalTags');
                    console.log(generalTags);
                    criteria = this.sheetSearchCriteria.searchCriteria[1];
                    var valueBasedTags = new Array();
                    this.retrieveSelectedCriteria(criteria, valueBasedTags);
                    console.log('valueBasedTags');
                    console.log(valueBasedTags);
                    criteria = this.sheetSearchCriteria.searchCriteria[2];
                    ;
                    var sectorsTags = new Array();
                    this.retrieveSelectedCriteria(criteria, sectorsTags);
                    console.log('sectorsTags');
                    console.log(sectorsTags);
                    var fact = new sheetFactory_1.SheetFactory();
                    this.searchResult = fact.fetchSheets(null, generalTags, valueBasedTags, sectorsTags);
                    this.sheetsRetrieved.next(this.searchResult);
                };
                SheetSearchCmp.prototype.retrieveSelectedCriteria = function (inCriteria, inTags) {
                    for (var i = 0; i < inCriteria.selections.length; i++) {
                        if (inCriteria.selections[i].selected) {
                            inTags[i] = inCriteria.selections[i].name;
                        }
                    }
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
                        directives: [searchCriteria_component_1.SearchCriteriaComponent],
                    }), 
                    __metadata('design:paramtypes', [sheetFactory_1.SheetFactory])
                ], SheetSearchCmp);
                return SheetSearchCmp;
            })();
            exports_1("SheetSearchCmp", SheetSearchCmp);
        }
    }
});
//# sourceMappingURL=sheetSearchCmp.js.map