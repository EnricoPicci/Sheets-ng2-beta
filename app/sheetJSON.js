System.register([], function(exports_1) {
    var SheetJSON;
    return {
        setters:[],
        execute: function() {
            SheetJSON = (function () {
                function SheetJSON() {
                }
                SheetJSON.prototype.fill = function (inSheet) {
                    this.id = inSheet.id;
                    this.title = inSheet.title;
                    this.longTitle = inSheet.longTitle;
                    this.imageUrl = inSheet.imageUrl;
                    this.createdBy = inSheet.createdBy;
                    this.description = inSheet.description;
                    this.oneYearReturn = inSheet.oneYearReturn;
                    this.oneMonthReturn = inSheet.oneMonthReturn;
                    this.dailyChange = inSheet.dailyChange;
                    this.benchmark = inSheet.benchmark;
                    this.valueAtRisk = inSheet.valueAtRisk;
                    this.volatility = inSheet.volatility;
                    // tags used as filter in search
                    this.general = inSheet.general;
                    this.valueBased = inSheet.valueBased;
                    this.sector = inSheet.sector;
                };
                return SheetJSON;
            })();
            exports_1("SheetJSON", SheetJSON);
        }
    }
});
//# sourceMappingURL=sheetJSON.js.map