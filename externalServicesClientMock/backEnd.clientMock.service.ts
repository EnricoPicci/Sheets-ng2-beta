import {Sheet} from '../app/sheet';
import {SheetBackEnd} from '../app/sheetBackEnd.service';

import{Asset} from '../app/asset';
import {AssetGroup} from '../app/assetGroup';
import {ReturnPeriod} from '../app/returnPeriod';

export class BackEndClientMock extends SheetBackEnd {
	getSheet(inId: number) {
		return this.getSomeSheets(inId, 1)[0];
	}


	getSomeSheets(inFromPosition: number, inMaxNumberOfSheets: number) {
		var sheets: Sheet[] = new Array<Sheet>();
		var sheetsCreated: Sheet[] = this.createSheets();
		if (inMaxNumberOfSheets >= sheetsCreated.length)  {
			inMaxNumberOfSheets = sheetsCreated.length;
		}
		for (var i = 0; i < inMaxNumberOfSheets; i++) {
			sheets[i] = sheetsCreated[i + inFromPosition];
		}
		return sheets;
	}    
    
    fillDetails(inSheet: Sheet) {
        // for the moment fills the Sheet with fixed data regardless the Sheet received as input
        inSheet.oneYearReturn = '11%';
        inSheet.oneMonthReturn = '6%';
        inSheet.dailyChange = '1%';
        inSheet.description = this.description;
        inSheet.assetGroups = this.getAssetGroups(inSheet);
        this.fillReturnData(inSheet, ReturnPeriod.lastMonth);
		return inSheet;
	}

	fetchSheets(searchString: string, generalTags: string[], valueBasedTags: string[], sectorsTags: string[]) {
		var ret: Array<Sheet> = new Array<Sheet>();
		var sheets: Sheet[] = this.createSheets();
		
		var tempArr : { [key:string]:Sheet; } = { };
		for (var i= 0; i < sheets.length; i++) {
			for (var j= 0; j < generalTags.length; j++) {
				if (sheets[i].general === generalTags[j]) {
					//console.log(sheets[i].title);
					tempArr[sheets[i].title] = sheets[i];
				}
			}
		}
		for (var i= 0; i < sheets.length; i++) {
			for (var j= 0; j < valueBasedTags.length; j++) {
				if (sheets[i].valueBased === valueBasedTags[j]) {
					tempArr[sheets[i].title] = sheets[i];
				}
			}
		}
		for (var i= 0; i < sheets.length; i++) {
			for (var j= 0; j < sectorsTags.length; j++) {
				if (sheets[i].sector === sectorsTags[j]) {
					tempArr[sheets[i].title] = sheets[i];
				}
			}
		}
		
		var i: number = 0;
		for (var key in tempArr) {
			ret[i] = tempArr[key];
			i++;
		}
		return ret;
	}

	getGeneralSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'New';
		ret[1] = 'Popular';
		ret[2] = 'Brands u know';
		return ret;
	};
	getValueBasedSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'Green';
		ret[1] = 'Social';
		ret[2] = 'Political';
		ret[3] = 'Current';
		return ret;
	};
	getSectorsSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'Energy';
		ret[1] = 'Health';
		ret[2] = 'FS';
		ret[3] = 'Real  Estate';
		ret[4] = 'Retail';
		return ret;
	};


    
    setRelativeStartOfScale(inAssetGroups: AssetGroup[]) {
        let relativeStartOfScale = 0;
        for (var i = 0; i < inAssetGroups.length; i++) {
            let assets = inAssetGroups[i].assets;
            for (var j = 0; j < assets.length; j++) {
                let asset = assets[j];
                asset.relativeStartOfScale = relativeStartOfScale;
                relativeStartOfScale = relativeStartOfScale + asset.range.max;
            }
        }
    }


		createSheets() {
            let createdBY = 'CocoonTechies';
		var sheets: Sheet[] = new Array<Sheet>();
sheets[0] = new Sheet(0, null, null, null, null);
sheets[0].title = 'Bear Int Market';  sheets[0].longTitle = 'International bears move on';  sheets[0].imageUrl = '../images/bears.jpg';  sheets[0].oneMonthReturn = '26.1';  sheets[0].general = 'Brands u know';  sheets[0].valueBased = 'Green';  sheets[0].sector = 'Energy';
sheets[0].createdBy = createdBY;
sheets[1] = new Sheet(1, null, null, null, null);
sheets[1].title = 'Bear US Sectors';  sheets[1].longTitle = 'US bears roars in several sectors';  sheets[1].imageUrl = '../images/cyclingBear.jpg';  sheets[1].oneMonthReturn = '14.0';  sheets[1].general = 'Popular';  sheets[1].valueBased = 'Current';  sheets[1].sector = 'Health'; 
sheets[1].createdBy = createdBY;
sheets[2] = new Sheet(2, null, null, null, null);
sheets[2].title = 'Enengia Pulita';  sheets[2].longTitle = 'Clean energy from italian gymns';  sheets[2].imageUrl = '../images/windMills.jpg';  sheets[2].oneMonthReturn = '12.4';  sheets[2].general = 'Popular';  sheets[2].valueBased = 'Green';  sheets[2].sector = 'FS'; 
sheets[2].createdBy = createdBY;
sheets[3] = new Sheet(3, null, null, null, null);
sheets[3].title = 'China internet';  sheets[3].longTitle = 'Many chines will shop online soon';  sheets[3].imageUrl = '../images/chinaInternet.jpg';  sheets[3].oneMonthReturn = '11.2';  sheets[3].general = 'New';  sheets[3].valueBased = 'Political';  sheets[3].sector = 'Real Estate'; 
sheets[3].createdBy = createdBY;
sheets[4] = new Sheet(4, null, null, null, null);
sheets[4].title = 'Mercati Orso USA';  sheets[4].longTitle = 'Orso americano non ruggisce solo a UCLA';  sheets[4].imageUrl = '../images/usBear.jpg';  sheets[4].oneMonthReturn = '10.7';  sheets[4].general = 'New';  sheets[4].valueBased = 'Political';  sheets[4].sector = 'Retail'; 
sheets[4].createdBy = createdBY;
sheets[5] = new Sheet(5, null, null, null, null);
sheets[5].title = 'Slot Machines and Casino';  sheets[5].longTitle = 'Everybody hopes tomorrow will be her/his/its luck day';  sheets[5].imageUrl = '../images/games.jpg';  sheets[5].oneMonthReturn = '8.6';  sheets[5].general = 'Popular';  sheets[5].valueBased = 'Green';  sheets[5].sector = 'FS'; 
sheets[5].createdBy = createdBY;
sheets[6] = new Sheet(6, null, null, null, null);
sheets[6].title = 'IPO recenti';  sheets[6].longTitle = 'Molti imprenditori tentano la fortuna';  sheets[6].imageUrl = '../images/ipos.jpg';  sheets[6].oneMonthReturn = '7.5';  sheets[6].general = 'Popular';  sheets[6].valueBased = 'Social';  sheets[6].sector = 'FS'; 
sheets[6].createdBy = createdBY;
sheets[7] = new Sheet(7, null, null, null, null);
sheets[7].title = 'Sci su erba';  sheets[7].longTitle = 'Fa troppo caldo, non si vede neve, sciamo con in cingoli';  sheets[7].imageUrl = '../images/2Hot.jpg';  sheets[7].oneMonthReturn = '5.5';  sheets[7].general = 'New';  sheets[7].valueBased = 'Social';  sheets[7].sector = 'Energy'; 
sheets[7].createdBy = createdBY;
sheets[8] = new Sheet(8, null, null, null, null);
sheets[8].title = 'Vanity Fair';  sheets[8].longTitle = 'Gli uomini sono diventati più vanitosi delle donne';  sheets[8].imageUrl = '../images/vanity.jpg';  sheets[8].oneMonthReturn = '5.3';  sheets[8].general = 'New';  sheets[8].valueBased = 'Current';  sheets[8].sector = 'Health'; 
sheets[8].createdBy = createdBY;
sheets[9] = new Sheet(9, null, null, null, null);
sheets[9].title = 'Caffe e tea';  sheets[9].longTitle = 'Il te verde fa specialmente bene';  sheets[9].imageUrl = '../images/coffe.jpg';  sheets[9].oneMonthReturn = '4.9';  sheets[9].general = 'Popular';  sheets[9].valueBased = 'Social';  sheets[9].sector = 'Health'; 
sheets[9].createdBy = createdBY;
sheets[10] = new Sheet(10, null, null, null, null);
sheets[10].title = 'Hot Retail';  sheets[10].longTitle = 'Tezinis, Benetton, Autostrade';  sheets[10].imageUrl = '../images/shopping.jpg';  sheets[10].oneMonthReturn = '2.0';  sheets[10].general = 'New';  sheets[10].valueBased = 'Current';  sheets[10].sector = 'Retail'; 
sheets[10].createdBy = createdBY;
sheets[11] = new Sheet(11, null, null, null, null);
sheets[11].title = 'Deflazione';  sheets[11].longTitle = 'Domani le tue banconote hanno più valore di oggi';  sheets[11].imageUrl = '../images/deflation.jpg';  sheets[11].oneMonthReturn = '1.1';  sheets[11].general = 'Popular';  sheets[11].valueBased = 'Social';  sheets[11].sector = 'FS'; 
sheets[11].createdBy = createdBY;
sheets[12] = new Sheet(12, null, null, null, null);
sheets[12].title = 'Stagflazione';  sheets[12].longTitle = 'Non so cosa voglia dire';  sheets[12].imageUrl = '../images/office.jpg';  sheets[12].oneMonthReturn = '1.0';  sheets[12].general = 'New';  sheets[12].valueBased = 'Green';  sheets[12].sector = 'FS'; 
sheets[11].createdBy = createdBY;
sheets[13] = new Sheet(13, null, null, null, null);
sheets[13].title = 'Ebola';  sheets[13].longTitle = 'Su questo non si scherza';  sheets[13].imageUrl = '../images/ebola.jpg';  sheets[13].oneMonthReturn = '0.9';  sheets[13].general = 'Popular';  sheets[13].valueBased = 'Current';  sheets[13].sector = 'Retail'; 
sheets[13].createdBy = createdBY;
sheets[14] = new Sheet(14, null, null, null, null);
sheets[14].title = 'Foodies';  sheets[14].longTitle = 'The last frontier of our beloved western world';  sheets[14].imageUrl = '../images/foodies.jpg';  sheets[14].oneMonthReturn = '0.8';  sheets[14].general = 'Popular';  sheets[14].valueBased = 'Social';  sheets[14].sector = 'Retail'; 
sheets[14].createdBy = createdBY;
sheets[15] = new Sheet(15, null, null, null, null);
sheets[15].title = 'RIP';  sheets[15].longTitle = 'Investire in una cosa sicura';  sheets[15].imageUrl = '../images/forRent.jpg';  sheets[15].oneMonthReturn = '0.7';  sheets[15].general = 'Popular';  sheets[15].valueBased = 'Political';  sheets[15].sector = 'Health'; 
sheets[15].createdBy = createdBY;
sheets[16] = new Sheet(16, null, null, null, null);
sheets[16].title = 'Bye Bye Baby';  sheets[16].longTitle = 'The last opportunity for us';  sheets[16].imageUrl = '../images/shopFromHome.jpg';  sheets[16].oneMonthReturn = '0.6';  sheets[16].general = 'New';  sheets[16].valueBased = 'Current';  sheets[16].sector = 'Retail'; 
sheets[16].createdBy = createdBY;

		return sheets;
	}

private description: string = 'The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. The morning has the sun in its mouth. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad. So much goes the cat to the lard that she looses the pad.';

    private getAssetGroups(inSheet: Sheet) {
        let id = inSheet.id;
        let ret = new Array<AssetGroup>();
        let assetGroup: AssetGroup;
        let assets1 = new Array<Asset>();
        let assets2 = new Array<Asset>();
        let assets3 = new Array<Asset>();
        let assets4 = new Array<Asset>();
        if (id == 1 || id == 4 || id == 7 || id == 10 || id == 13 || id == 16) { 
            assets1[0] = new Asset('Diamond Inc.', 'SAD', 5, '6%', '42%', 0, 10);
            assets1[1] = new Asset('Indian African Co.', 'IAC', 8, '2%', '12%', 5, 15);
            assets1[2] = new Asset('Plutonion International', 'PLI', 12, '1%', '15%', 10, 20);
            assets1[3] = new Asset('Cape Wineries Plc', 'CWN', 20, '1%', '15%', 15, 30);
            assetGroup = new AssetGroup('South Africa', 45, '11%', '4%', assets1, 30, 75);
            assetGroup.sheet = inSheet;
            assets1[0].assetGroup = assetGroup;
            assets1[1].assetGroup = assetGroup;
            assets1[2].assetGroup = assetGroup;
            assets1[3].assetGroup = assetGroup;
            ret[0] = assetGroup;

            assets2[0] = new Asset('Tea and Coffee Inc.', 'TCI', 6, '12%', '32%', 0, 10);
            assets2[1] = new Asset('Caribe Banana Co.', 'CBC', 24, '12%', '22%', 10, 25);
            assets2[2] = new Asset('Rasta Co', 'RCO', 5, '2%', '20%', 5, 7);
            assetGroup = new AssetGroup('Jamaica', 35, '21%', '2%', assets2, 15, 42);
            assetGroup.sheet = inSheet;
            assets2[0].assetGroup = assetGroup;
            assets2[1].assetGroup = assetGroup;
            assets2[2].assetGroup = assetGroup;
            ret[1] = assetGroup;

            assets3[0] = new Asset('Mekong Lmtd', 'MKL', 6, '6%', '2%', 5, 25);
            assets3[1] = new Asset('Monks', 'MNK', 0, '7%', '17%', 0, 15);
            assets3[2] = new Asset('Mangoes Del Monte', 'MDM', 4, '7%', '17%', 0, 10);
            assetGroup = new AssetGroup('Cambodia', 10, '14%', '3%', assets3, 5, 50); 
            assetGroup.sheet = inSheet;
            assets3[0].assetGroup = assetGroup;
            assets3[1].assetGroup = assetGroup;
            assets3[2].assetGroup = assetGroup;
            ret[2] = assetGroup;

            assets4[0] = new Asset('Kim Lmtd', 'KLM', 5, '6%', '2%', 5, 30);
            assets4[1] = new Asset('Kim Unlimited', 'KUL', 5, '7%', '17%', 0, 20);
            assetGroup = new AssetGroup('North Korea', 10, '14%', '3%', assets4, 5, 50); 
            assetGroup.sheet = inSheet;
            assets4[0].assetGroup = assetGroup;
            assets4[1].assetGroup = assetGroup;
            ret[3] = assetGroup;
        } else {
            assets1[0] = new Asset('Diamond Inc.', 'SAD', 5, '6%', '42%', 0, 10);
            assets1[1] = new Asset('Indian African Co.', 'IAC', 8, '2%', '12%', 0, 45);
            assets1[2] = new Asset('Plutonion International', 'PLI', 12, '1%', '15%', 0, 20);
            assets1[3] = new Asset('Cape Wineries Plc', 'CWN', 20, '1%', '15%', 0, 30);
            assetGroup = new AssetGroup('South Africa', 45, '11%', '4%', assets1, 0, 100);
            assetGroup.sheet = inSheet;
            assets1[0].assetGroup = assetGroup;
            assets1[1].assetGroup = assetGroup;
            assets1[2].assetGroup = assetGroup;
            assets1[3].assetGroup = assetGroup;
            ret[0] = assetGroup;

            assets2[0] = new Asset('Tea and Coffee Inc.', 'TCI', 6, '12%', '32%', 0, 30);
            assets2[1] = new Asset('Caribe Banana Co.', 'CBC', 24, '12%', '22%', 0, 25);
            assets2[2] = new Asset('Rasta Co', 'RCO', 5, '2%', '20%', 0, 45);
            assetGroup = new AssetGroup('Jamaica', 35, '21%', '2%', assets2, 0, 100);
            assetGroup.sheet = inSheet;
            assets2[0].assetGroup = assetGroup;
            assets2[1].assetGroup = assetGroup;
            assets2[2].assetGroup = assetGroup;
            ret[1] = assetGroup;

            assets3[0] = new Asset('Mekong Lmtd', 'MKL', 6, '6%', '2%', 0, 45);
            assets3[1] = new Asset('Monks', 'MNK', 0, '7%', '17%', 0, 15);
            assets3[2] = new Asset('Mangoes Del Monte', 'MDM', 4, '7%', '17%', 0, 40);
            assetGroup = new AssetGroup('Cambodia', 10, '14%', '3%', assets3, 0, 100); 
            assetGroup.sheet = inSheet;
            assets3[0].assetGroup = assetGroup;
            assets3[1].assetGroup = assetGroup;
            assets3[2].assetGroup = assetGroup;
            ret[2] = assetGroup;

            assets4[0] = new Asset('Kim Lmtd', 'KLM', 5, '6%', '2%', 0, 30);
            assets4[1] = new Asset('Kim Unlimited', 'KUL', 5, '7%', '17%', 0, 70);
            assetGroup = new AssetGroup('North Korea', 10, '14%', '3%', assets4, 0, 100); 
            assetGroup.sheet = inSheet;
            assets4[0].assetGroup = assetGroup;
            assets4[1].assetGroup = assetGroup;
            ret[3] = assetGroup;            
        }

        return ret;
    }

    fillReturnData(inSheet: Sheet, inPeriod: ReturnPeriod) {
        switch(inPeriod) {
            case ReturnPeriod.lastMonth:
                this.fillReturnDataLastMonth(inSheet);
                break;
            case ReturnPeriod.lastYear:
                this.fillReturnDataLastYear(inSheet);
                break;
            case ReturnPeriod.lastFiveYears:
                this.fillReturnDataLast5years(inSheet);
                break;                
            default:
                console.error('Return period for Sheets not supported -- Return period input: ' + inPeriod);
        }
    }
    
    fillReturnDataLastMonth(inSheet: Sheet) {
        let id = inSheet.id;
        if (id == 1 || id == 4 || id == 7 || id == 10 || id == 13 || id == 16) {
            inSheet.returnData.data = [
                [3.62, 1.45, 1.24, 1.20, 3.67, 6.26, 7.87, 8.79, 9.34, 9.96, 10.3, 10.6, 10.6, 10.7, 11.1, 11.2, 11.6, 12.0, 12.2, 12.3, 12.5, 12.6, 12.7, 12.8, 13.1, 13.3, 13.4, 13.7, 14.1, 14.4],
                [7.24, 2.91, 1.13, 1.04, 7.29, 9.49, 9.81, 12.1, 12.8, 14.8, 13.9, 13.4, 10.5, 12.0, 14.5, 12.4, 15.7, 16.6, 14.5, 13.7, 14.8, 13.5, 13.9, 13.9, 17.7, 15.1, 14.6, 18.1, 18.9, 19.2]
            ];
            inSheet.returnData.series = [inSheet.title, 'S&P 1312'];
        } else if (id == 2 || id == 5 || id == 8 || id == 11 || id == 14) {
            inSheet.returnData.data = [
                [0.5, 1.08, 2.15, 1.78, 2.87, 3.39, 3.76, 4.38, 4.34, 4.70, 4.85, 4.77, 5.04, 4.99, 5.39, 5.67, 6.00, 5.94, 6.09, 6.06, 6.19, 6.28, 6.48, 6.64, 6.79, 6.88, 6.85, 7.01, 7.20, 7.48],
                [1, 2.16, 3.23, 1.59, 4.05, 4.51, 4.41, 6.17, 4.22, 6.02, 5.55, 4.43, 6.30, 4.74, 7.32, 7.05, 7.69, 5.56, 6.93, 5.94, 6.96, 6.80, 7.68, 7.65, 7.72, 7.46, 6.69, 8.06, 8.52, 9.43]
            ];
            inSheet.returnData.series = [inSheet.title, 'Best Dream Index'];
        } else {
            inSheet.returnData.data = [
                [-0.2, -0.0, -0.1, 0.82, 0.99, 1.20, 2.12, 1.72, 1.52, 1.32, 1.18, 1.74, 2.30, 3.13, 2.92, 3.14, 3.37, 3.59, 3.79, 4.03, 4.28, 4.27, 4.18, 4.38, 4.61, 4.84, 4.95, 5.15, 5.06, 5.26],
                [-0.4, -0.1, -0.2, 0.63, 0.98, 1.18, 2.88, 1.32, 1.27, 0.91, 0.93, 2.59, 3.05, 4.12, 2.55, 3.64, 4.10, 4.22, 4.42, 4.84, 5.18, 4.22, 3.80, 5.26, 5.61, 5.78, 5.45, 6.04, 4.67, 6.25]
            ];
            inSheet.returnData.series = [inSheet.title, 'Worst Nitghmare Index'];            
        }
        this.fillLastMonthLabel(inSheet);
    }
    
    fillReturnDataLastYear(inSheet: Sheet) {
        let id = inSheet.id;
    }
    
    fillReturnDataLast5years(inSheet: Sheet) {
        let id = inSheet.id;
    }
    
    private fillLastMonthLabel(inSheet: Sheet) {
        let today = Date.now();
        for (var i = 31; i > 0; i--) {
            let day = new Date(today - 1000*60*60*24*i);
            console.log(day);
            inSheet.returnData.labels.push(day);
        }
    }

}