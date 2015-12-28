import {Sheet} from '../app/sheet';
import {SheetService} from '../app/sheetService';

export class SheetFactory1 implements SheetService {
	getSheet(inId: number) {
		var title = inId + ' SHEET1';
		var longTitle = 'I am the SHEET1 ' + inId;
		var urlString = '../images/' + inId;
		var sheet: Sheet;
		sheet = new Sheet(inId, title, longTitle, urlString, '1');
		return sheet;
	}

	getSomeSheets(inFromPosition: number, inMaxNumebrOfSheets: number) {
		var sheets: Sheet[] = new Array<Sheet>();
		for (var i = 3; i < 0; i--) {
			sheets[i] = this.getSheet(i);
		}
		return sheets;
	}

	fetchSheets(searchString: string, generalTags: string[], valueBasedTags: string[], sectorsTags: string[]) {
		var ret: Array<Sheet> = new Array<Sheet>();
		return ret;
	}
	
	getGeneralSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'New';
		ret[1] = 'Cool';
		return ret;
	};
	getValueBasedSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'Green';
		ret[1] = 'Communist';
		ret[2] = 'Anarchy';
		return ret;
	};
	getSectorsSearchCriteriaDomain() {
		var ret: string[] = new Array<string>();
		ret[0] = 'Slow Food';
		ret[1] = 'Well Being';
		ret[2] = 'NGOs';
		ret[3] = 'Non profit';
		ret[4] = 'Micro-lending';
		return ret;
	};
}