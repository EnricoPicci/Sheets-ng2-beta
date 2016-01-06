System.register([], function(exports_1) {
    var Sheet;
    return {
        setters:[],
        execute: function() {
            Sheet = (function () {
                function Sheet(inId, inTitle, inLongTitle, inImageUrl, inOneMonthReturn) {
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