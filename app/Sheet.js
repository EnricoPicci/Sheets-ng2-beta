System.register([], function(exports_1) {
    var Sheet;
    return {
        setters:[],
        execute: function() {
            Sheet = (function () {
                function Sheet(inTitle, inLongTitle, inImageUrl, inOneMonthReturn) {
                    this.title = inTitle;
                    this.longTitle = inLongTitle;
                    this.imageUrl = inImageUrl;
                    this.oneMonthReturn = inOneMonthReturn;
                }
                Sheet.prototype.setDescription = function (inDescription) {
                    this.description = inDescription;
                };
                return Sheet;
            })();
            exports_1("Sheet", Sheet);
        }
    }
});
//# sourceMappingURL=Sheet.js.map