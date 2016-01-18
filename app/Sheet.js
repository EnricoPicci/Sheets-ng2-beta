System.register(['angular2/core', './returnData'], function(exports_1) {
    var core_1, returnData_1;
    var Sheet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (returnData_1_1) {
                returnData_1 = returnData_1_1;
            }],
        execute: function() {
            Sheet = (function () {
                function Sheet(inId, inTitle, inLongTitle, inImageUrl, inOneMonthReturn) {
                    this.returnDataLastMonth = new returnData_1.ReturnData();
                    this.returnDataLastYear = new returnData_1.ReturnData();
                    this.returnDataAll = new returnData_1.ReturnData();
                    this.returnDataBenchmarkLastMonth = new returnData_1.ReturnData();
                    this.returnDataBenchmarkLastYear = new returnData_1.ReturnData();
                    this.returnDataBenchmarkAll = new returnData_1.ReturnData();
                    // add en EventEmmiter to communicate when sheet composition changes to all components that may be interested
                    this._changeCompositionEventEmitter = new core_1.EventEmitter();
                    this.id = inId;
                    this.title = inTitle;
                    this.longTitle = inLongTitle;
                    this.imageUrl = inImageUrl;
                    this.oneMonthReturn = inOneMonthReturn;
                }
                Sheet.prototype.emitChangeCompositionEvent = function () {
                    this._changeCompositionEventEmitter.emit(this);
                };
                Sheet.prototype.getChangeCompositionEvent = function () {
                    return this._changeCompositionEventEmitter;
                };
                return Sheet;
            })();
            exports_1("Sheet", Sheet);
        }
    }
});
//# sourceMappingURL=sheet.js.map