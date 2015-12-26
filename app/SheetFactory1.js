System.register(['../app/Sheet'], function(exports_1) {
    var Sheet_1;
    var SheetFactory1;
    return {
        setters:[
            function (Sheet_1_1) {
                Sheet_1 = Sheet_1_1;
            }],
        execute: function() {
            SheetFactory1 = (function () {
                function SheetFactory1() {
                }
                SheetFactory1.prototype.getSheet = function (inId) {
                    var title = inId + ' SHEET1';
                    var longTitle = 'I am the SHEET1 ' + inId;
                    var urlString = '../images/' + inId;
                    var sheet;
                    sheet = new Sheet_1.Sheet(title, longTitle, urlString, '1');
                    return sheet;
                };
                SheetFactory1.prototype.getSomeSheets = function (inFromPosition, inMaxNumebrOfSheets) {
                    var sheets = new Array();
                    for (var i = 3; i < 0; i--) {
                        sheets[i] = this.getSheet('sheet' + i);
                    }
                    return sheets;
                };
                SheetFactory1.prototype.fetchSheets = function (searchString, generalTags, valueBasedTags, sectorsTags) {
                    var ret = new Array();
                    return ret;
                };
                SheetFactory1.prototype.getGeneralSearchCriteriaDomain = function () {
                    var ret = new Array();
                    ret[0] = 'New';
                    ret[1] = 'Cool';
                    return ret;
                };
                ;
                SheetFactory1.prototype.getValueBasedSearchCriteriaDomain = function () {
                    var ret = new Array();
                    ret[0] = 'Green';
                    ret[1] = 'Communist';
                    ret[2] = 'Anarchy';
                    return ret;
                };
                ;
                SheetFactory1.prototype.getSectorsSearchCriteriaDomain = function () {
                    var ret = new Array();
                    ret[0] = 'Slow Food';
                    ret[1] = 'Well Being';
                    ret[2] = 'NGOs';
                    ret[3] = 'Non profit';
                    ret[4] = 'Micro-lending';
                    return ret;
                };
                ;
                return SheetFactory1;
            })();
            exports_1("SheetFactory1", SheetFactory1);
        }
    }
});
//# sourceMappingURL=SheetFactory1.js.map