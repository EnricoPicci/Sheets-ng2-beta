System.register([], function(exports_1) {
    var AssetAbstract;
    return {
        setters:[],
        execute: function() {
            AssetAbstract = (function () {
                function AssetAbstract(inName, inWeight, inOneMonthRet, inOneYearRet, inMinWeight, inMaxWeight) {
                    this.show = true;
                    this.locked = false;
                    this.name = inName;
                    this.weight = inWeight;
                    this.oneMonthRet = inOneMonthRet;
                    this.oneYearRet = inOneYearRet;
                    this.minWeight = inMinWeight;
                    this.maxWeight = inMaxWeight;
                    this.range = { 'min': this.minWeight, 'max': this.maxWeight };
                    this.pips = { mode: 'values',
                        values: [inMinWeight, inMaxWeight],
                        density: 10 };
                }
                AssetAbstract.prototype.setLocked = function (inLocked) {
                    this.locked = inLocked;
                };
                AssetAbstract.prototype.checkConsistency = function () {
                    if (this.weight < this.minWeight) {
                        console.error(this.name + ': Weight less than allowed min');
                    }
                    if (this.weight > this.maxWeight) {
                        console.error(this.name + ': Weight more than allowed max');
                    }
                };
                return AssetAbstract;
            })();
            exports_1("AssetAbstract", AssetAbstract);
        }
    }
});
//# sourceMappingURL=assetAbstract.js.map