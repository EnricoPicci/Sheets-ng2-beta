System.register(['./returnData'], function(exports_1) {
    var returnData_1;
    var Sheet;
    return {
        setters:[
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
                    this.id = inId;
                    this.title = inTitle;
                    this.longTitle = inLongTitle;
                    this.imageUrl = inImageUrl;
                    this.oneMonthReturn = inOneMonthReturn;
                }
                return Sheet;
            })();
            exports_1("Sheet", Sheet);
        }
    }
});
//# sourceMappingURL=sheet.js.map