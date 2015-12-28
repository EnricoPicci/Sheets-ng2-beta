System.register(['../app/searchSelection'], function(exports_1) {
    var searchSelection_1;
    var SheetSearchCriteria;
    return {
        setters:[
            function (searchSelection_1_1) {
                searchSelection_1 = searchSelection_1_1;
            }],
        execute: function() {
            SheetSearchCriteria = (function () {
                function SheetSearchCriteria(inSheetService) {
                    this.sheetService = inSheetService;
                }
                SheetSearchCriteria.prototype.getGeneralDomain = function () {
                    if (SheetSearchCriteria.generalDomain == null) {
                        SheetSearchCriteria.generalDomain = this.sheetService.getGeneralSearchCriteriaDomain();
                    }
                    if (this.general == null) {
                        this.general = new Array();
                        for (var i = 0; i < SheetSearchCriteria.generalDomain.length; i++) {
                            this.general[i] = new searchSelection_1.SearchSelection(SheetSearchCriteria.generalDomain[i]);
                        }
                    }
                    return this.general;
                };
                SheetSearchCriteria.prototype.getValueBasedDomain = function () {
                    if (SheetSearchCriteria.valueBasedDomain == null) {
                        SheetSearchCriteria.valueBasedDomain = this.sheetService.getValueBasedSearchCriteriaDomain();
                    }
                    if (this.valueBased == null) {
                        this.valueBased = new Array();
                        for (var i = 0; i < SheetSearchCriteria.valueBasedDomain.length; i++) {
                            this.valueBased[i] = new searchSelection_1.SearchSelection(SheetSearchCriteria.valueBasedDomain[i]);
                        }
                    }
                    return this.valueBased;
                };
                SheetSearchCriteria.prototype.getSectorsDomain = function () {
                    if (SheetSearchCriteria.sectorsDomain == null) {
                        SheetSearchCriteria.sectorsDomain = this.sheetService.getSectorsSearchCriteriaDomain();
                    }
                    if (this.sectors == null) {
                        this.sectors = new Array();
                        for (var i = 0; i < SheetSearchCriteria.sectorsDomain.length; i++) {
                            this.sectors[i] = new searchSelection_1.SearchSelection(SheetSearchCriteria.sectorsDomain[i]);
                        }
                    }
                    return this.sectors;
                };
                return SheetSearchCriteria;
            })();
            exports_1("SheetSearchCriteria", SheetSearchCriteria);
        }
    }
});
//# sourceMappingURL=sheetSearchCriteria.js.map