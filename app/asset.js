System.register([], function(exports_1) {
    var Asset;
    return {
        setters:[],
        execute: function() {
            Asset = (function () {
                function Asset(inName, inSymbol, inWeight, inOneMonthRet, inOneYearRet) {
                    this.locked = false;
                    this.name = inName;
                    this.symbol = inSymbol;
                    this.weight = inWeight;
                    this.oneMonthRet = inOneMonthRet;
                    this.oneYearRet = inOneYearRet;
                }
                return Asset;
            })();
            exports_1("Asset", Asset);
        }
    }
});
//# sourceMappingURL=asset.js.map