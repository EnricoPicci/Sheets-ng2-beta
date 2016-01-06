System.register([], function(exports_1) {
    var AssetGroup;
    return {
        setters:[],
        execute: function() {
            AssetGroup = (function () {
                function AssetGroup(inName, inWeight, inOneMonthRet, inOneYearRet, inAssets) {
                    this.show = true;
                    this.name = inName;
                    this.weight = inWeight;
                    this.oneMonthRet = inOneMonthRet;
                    this.oneYearRet = inOneYearRet;
                    this.assets = inAssets;
                }
                return AssetGroup;
            })();
            exports_1("AssetGroup", AssetGroup);
        }
    }
});
//# sourceMappingURL=assetGroup.js.map