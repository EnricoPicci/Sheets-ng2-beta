System.register(['./sheet', './asset', './assetGroup'], function(exports_1) {
    var sheet_1, asset_1, assetGroup_1;
    var SheetFactory;
    return {
        setters:[
            function (sheet_1_1) {
                sheet_1 = sheet_1_1;
            },
            function (asset_1_1) {
                asset_1 = asset_1_1;
            },
            function (assetGroup_1_1) {
                assetGroup_1 = assetGroup_1_1;
            }],
        execute: function() {
            SheetFactory = (function () {
                function SheetFactory() {
                    this.description = 'The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad.';
                }
                SheetFactory.prototype.getSheet = function (inId) {
                    return this.getSomeSheets(inId, 1)[0];
                };
                SheetFactory.prototype.fillDetails = function (inSheet) {
                    // for the moment fills the Sheet with fixed data regardless the Sheet received as input
                    inSheet.oneYearReturn = '11%';
                    inSheet.oneMonthReturn = '6%';
                    inSheet.dailyChange = '1%';
                    inSheet.description = this.description;
                    inSheet.assetGroups = this.getAssetGroups(inSheet);
                    return inSheet;
                };
                SheetFactory.prototype.getSomeSheets = function (inFromPosition, inMaxNumberOfSheets) {
                    var sheets = new Array();
                    var sheetsCreated = this.createSheets();
                    if (inMaxNumberOfSheets >= sheetsCreated.length) {
                        inMaxNumberOfSheets = sheetsCreated.length;
                    }
                    for (var i = 0; i < inMaxNumberOfSheets; i++) {
                        sheets[i] = sheetsCreated[i + inFromPosition];
                    }
                    return sheets;
                };
                SheetFactory.prototype.fetchSheets = function (searchString, generalTags, valueBasedTags, sectorsTags) {
                    var ret = new Array();
                    var sheets = this.createSheets();
                    var tempArr = {};
                    for (var i = 0; i < sheets.length; i++) {
                        for (var j = 0; j < generalTags.length; j++) {
                            if (sheets[i].general === generalTags[j]) {
                                //console.log(sheets[i].title);
                                tempArr[sheets[i].title] = sheets[i];
                            }
                        }
                    }
                    for (var i = 0; i < sheets.length; i++) {
                        for (var j = 0; j < valueBasedTags.length; j++) {
                            if (sheets[i].valueBased === valueBasedTags[j]) {
                                tempArr[sheets[i].title] = sheets[i];
                            }
                        }
                    }
                    for (var i = 0; i < sheets.length; i++) {
                        for (var j = 0; j < sectorsTags.length; j++) {
                            if (sheets[i].sector === sectorsTags[j]) {
                                tempArr[sheets[i].title] = sheets[i];
                            }
                        }
                    }
                    var i = 0;
                    for (var key in tempArr) {
                        //console.log(tempArr[key]);
                        ret[i] = tempArr[key];
                        i++;
                    }
                    return ret;
                };
                SheetFactory.prototype.getGeneralSearchCriteriaDomain = function () {
                    var ret = new Array();
                    ret[0] = 'New';
                    ret[1] = 'Popular';
                    ret[2] = 'Brands u know';
                    return ret;
                };
                ;
                SheetFactory.prototype.getValueBasedSearchCriteriaDomain = function () {
                    var ret = new Array();
                    ret[0] = 'Green';
                    ret[1] = 'Social';
                    ret[2] = 'Political';
                    ret[3] = 'Current';
                    return ret;
                };
                ;
                SheetFactory.prototype.getSectorsSearchCriteriaDomain = function () {
                    var ret = new Array();
                    ret[0] = 'Energy';
                    ret[1] = 'Health';
                    ret[2] = 'FS';
                    ret[3] = 'Real  Estate';
                    ret[4] = 'Retail';
                    return ret;
                };
                ;
                SheetFactory.prototype.createSheets = function () {
                    var createdBY = 'CocoonTechies';
                    var sheets = new Array();
                    sheets[0] = new sheet_1.Sheet(0, null, null, null, null);
                    sheets[0].title = 'Bear Int Market';
                    sheets[0].longTitle = 'International bears move on';
                    sheets[0].imageUrl = '../images/bears.jpg';
                    sheets[0].oneMonthReturn = '26.1';
                    sheets[0].general = 'Brands u know';
                    sheets[0].valueBased = 'Green';
                    sheets[0].sector = 'Energy';
                    sheets[0].createdBy = createdBY;
                    sheets[1] = new sheet_1.Sheet(1, null, null, null, null);
                    sheets[1].title = 'Bear US Sectors';
                    sheets[1].longTitle = 'US bears roars in several sectors';
                    sheets[1].imageUrl = '../images/cyclingBear.jpg';
                    sheets[1].oneMonthReturn = '14.0';
                    sheets[1].general = 'Popular';
                    sheets[1].valueBased = 'Current';
                    sheets[1].sector = 'Health';
                    sheets[1].createdBy = createdBY;
                    sheets[2] = new sheet_1.Sheet(2, null, null, null, null);
                    sheets[2].title = 'Enengia Pulita';
                    sheets[2].longTitle = 'Clean energy from italian gymns';
                    sheets[2].imageUrl = '../images/windMills.jpg';
                    sheets[2].oneMonthReturn = '12.4';
                    sheets[2].general = 'Popular';
                    sheets[2].valueBased = 'Green';
                    sheets[2].sector = 'FS';
                    sheets[2].createdBy = createdBY;
                    sheets[3] = new sheet_1.Sheet(3, null, null, null, null);
                    sheets[3].title = 'China internet';
                    sheets[3].longTitle = 'Many chines will shop online soon';
                    sheets[3].imageUrl = '../images/chinaInternet.jpg';
                    sheets[3].oneMonthReturn = '11.2';
                    sheets[3].general = 'New';
                    sheets[3].valueBased = 'Political';
                    sheets[3].sector = 'Real Estate';
                    sheets[3].createdBy = createdBY;
                    sheets[4] = new sheet_1.Sheet(4, null, null, null, null);
                    sheets[4].title = 'Mercati Orso USA';
                    sheets[4].longTitle = 'Orso americano non ruggisce solo a UCLA';
                    sheets[4].imageUrl = '../images/usBear.jpg';
                    sheets[4].oneMonthReturn = '10.7';
                    sheets[4].general = 'New';
                    sheets[4].valueBased = 'Political';
                    sheets[4].sector = 'Retail';
                    sheets[4].createdBy = createdBY;
                    sheets[5] = new sheet_1.Sheet(5, null, null, null, null);
                    sheets[5].title = 'Slot Machines and Casino';
                    sheets[5].longTitle = 'Everybody hopes tomorrow will be her/his/its luck day';
                    sheets[5].imageUrl = '../images/games.jpg';
                    sheets[5].oneMonthReturn = '8.6';
                    sheets[5].general = 'Popular';
                    sheets[5].valueBased = 'Green';
                    sheets[5].sector = 'FS';
                    sheets[5].createdBy = createdBY;
                    sheets[6] = new sheet_1.Sheet(6, null, null, null, null);
                    sheets[6].title = 'IPO recenti';
                    sheets[6].longTitle = 'Molti imprenditori tentano la fortuna';
                    sheets[6].imageUrl = '../images/ipos.jpg';
                    sheets[6].oneMonthReturn = '7.5';
                    sheets[6].general = 'Popular';
                    sheets[6].valueBased = 'Social';
                    sheets[6].sector = 'FS';
                    sheets[6].createdBy = createdBY;
                    sheets[7] = new sheet_1.Sheet(7, null, null, null, null);
                    sheets[7].title = 'Sci su erba';
                    sheets[7].longTitle = 'Fa troppo caldo, non si vede neve, sciamo con in cingoli';
                    sheets[7].imageUrl = '../images/2Hot.jpg';
                    sheets[7].oneMonthReturn = '5.5';
                    sheets[7].general = 'New';
                    sheets[7].valueBased = 'Social';
                    sheets[7].sector = 'Energy';
                    sheets[7].createdBy = createdBY;
                    sheets[8] = new sheet_1.Sheet(8, null, null, null, null);
                    sheets[8].title = 'Vanity Fair';
                    sheets[8].longTitle = 'Gli uomini sono diventati più vanitosi delle donne';
                    sheets[8].imageUrl = '../images/vanity.jpg';
                    sheets[8].oneMonthReturn = '5.3';
                    sheets[8].general = 'New';
                    sheets[8].valueBased = 'Current';
                    sheets[8].sector = 'Health';
                    sheets[8].createdBy = createdBY;
                    sheets[9] = new sheet_1.Sheet(9, null, null, null, null);
                    sheets[9].title = 'Caffe e tea';
                    sheets[9].longTitle = 'Il te verde fa specialmente bene';
                    sheets[9].imageUrl = '../images/coffe.jpg';
                    sheets[9].oneMonthReturn = '4.9';
                    sheets[9].general = 'Popular';
                    sheets[9].valueBased = 'Social';
                    sheets[9].sector = 'Health';
                    sheets[9].createdBy = createdBY;
                    sheets[10] = new sheet_1.Sheet(10, null, null, null, null);
                    sheets[10].title = 'Hot Retail';
                    sheets[10].longTitle = 'Tezinis, Benetton, Autostrade';
                    sheets[10].imageUrl = '../images/shopping.jpg';
                    sheets[10].oneMonthReturn = '2.0';
                    sheets[10].general = 'New';
                    sheets[10].valueBased = 'Current';
                    sheets[10].sector = 'Retail';
                    sheets[10].createdBy = createdBY;
                    sheets[11] = new sheet_1.Sheet(11, null, null, null, null);
                    sheets[11].title = 'Deflazione';
                    sheets[11].longTitle = 'Domani le tue banconote hanno più valore di oggi';
                    sheets[11].imageUrl = '../images/deflation.jpg';
                    sheets[11].oneMonthReturn = '1.1';
                    sheets[11].general = 'Popular';
                    sheets[11].valueBased = 'Social';
                    sheets[11].sector = 'FS';
                    sheets[11].createdBy = createdBY;
                    sheets[12] = new sheet_1.Sheet(12, null, null, null, null);
                    sheets[12].title = 'Stagflazione';
                    sheets[12].longTitle = 'Non so cosa voglia dire';
                    sheets[12].imageUrl = '../images/office.jpg';
                    sheets[12].oneMonthReturn = '1.0';
                    sheets[12].general = 'New';
                    sheets[12].valueBased = 'Green';
                    sheets[12].sector = 'FS';
                    sheets[11].createdBy = createdBY;
                    sheets[13] = new sheet_1.Sheet(13, null, null, null, null);
                    sheets[13].title = 'Ebola';
                    sheets[13].longTitle = 'Su questo non si scherza';
                    sheets[13].imageUrl = '../images/ebola.jpg';
                    sheets[13].oneMonthReturn = '0.9';
                    sheets[13].general = 'Popular';
                    sheets[13].valueBased = 'Current';
                    sheets[13].sector = 'Retail';
                    sheets[13].createdBy = createdBY;
                    sheets[14] = new sheet_1.Sheet(14, null, null, null, null);
                    sheets[14].title = 'Foodies';
                    sheets[14].longTitle = 'The last frontier of our beloved western world';
                    sheets[14].imageUrl = '../images/foodies.jpg';
                    sheets[14].oneMonthReturn = '0.8';
                    sheets[14].general = 'Popular';
                    sheets[14].valueBased = 'Social';
                    sheets[14].sector = 'Retail';
                    sheets[14].createdBy = createdBY;
                    sheets[15] = new sheet_1.Sheet(15, null, null, null, null);
                    sheets[15].title = 'RIP';
                    sheets[15].longTitle = 'Investire in una cosa sicura';
                    sheets[15].imageUrl = '../images/forRent.jpg';
                    sheets[15].oneMonthReturn = '0.7';
                    sheets[15].general = 'Popular';
                    sheets[15].valueBased = 'Political';
                    sheets[15].sector = 'Health';
                    sheets[15].createdBy = createdBY;
                    sheets[16] = new sheet_1.Sheet(16, null, null, null, null);
                    sheets[16].title = 'Bye Bye Baby';
                    sheets[16].longTitle = 'The last opportunity for us';
                    sheets[16].imageUrl = '../images/shopFromHome.jpg';
                    sheets[16].oneMonthReturn = '0.6';
                    sheets[16].general = 'New';
                    sheets[16].valueBased = 'Current';
                    sheets[16].sector = 'Retail';
                    sheets[16].createdBy = createdBY;
                    return sheets;
                };
                SheetFactory.prototype.getAssetGroups = function (inSheet) {
                    // for the moment create a fixed array of AssetGroup regardless the Sheet received as input
                    var ret = new Array();
                    var assetGroup;
                    var assets1 = new Array();
                    assets1[0] = new asset_1.Asset('Diamond Inc.', 'SAD', 10, '6%', '42%', 10, 30);
                    assets1[1] = new asset_1.Asset('Indian African Co.', 'IAC', 5, '2%', '12%', 0, 40);
                    assets1[2] = new asset_1.Asset('Plutonion International', 'PLI', 7, '1%', '15%', 0, 10);
                    assetGroup = new assetGroup_1.AssetGroup('South Africa', 30, '11%', '4%', assets1, 10, 50);
                    ret[0] = assetGroup;
                    var assets2 = new Array();
                    assets2[0] = new asset_1.Asset('Tea and Coffee Inc.', 'TCI', 20, '12%', '32%', 0, 25);
                    assets2[1] = new asset_1.Asset('Caribe Banana Co.', 'CBC', 25, '12%', '22%', 10, 40);
                    assets2[2] = new asset_1.Asset('Rasta Co', 'RCO', 15, '2%', '20%', 10, 30);
                    assetGroup = new assetGroup_1.AssetGroup('Jamaica', 50, '21%', '2%', assets2, 20, 60);
                    ret[1] = assetGroup;
                    var assets3 = new Array();
                    assets3[0] = new asset_1.Asset('Mekong Lmtd', 'MKL', 12, '6%', '2%', 0, 30);
                    assets3[1] = new asset_1.Asset('Monks', 'MNK', 8, '7%', '17%', 0, 20);
                    assetGroup = new assetGroup_1.AssetGroup('Cambodia', 20, '14%', '3%', assets3, 0, 20);
                    ret[2] = assetGroup;
                    return ret;
                };
                return SheetFactory;
            })();
            exports_1("SheetFactory", SheetFactory);
        }
    }
});
//# sourceMappingURL=sheetFactory.js.map