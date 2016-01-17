import {Component} from 'angular2/core';

import {SheetBackEnd} from './sheetBackEnd.service';
import {SheetCmp} from './sheet.component';
import {Sheet} from './sheet';
import {CollectionOfSheetsCmp} from './collectionOfSheetsCmp';
import {SheetSearchCmp} from './sheetSearch.component';
import {SheetSummaryComponent} from './sheetSummary.component';
import {SheetDetailComponent} from './sheetDetail.component';

@Component({
    selector: 'sheet-dashboard',
	providers: [],
    templateUrl: '../templates/sheetDashboard.html',
    styleUrls: ['../styles/app.css'],
	directives: [CollectionOfSheetsCmp, SheetSearchCmp],
})

export class SheetDashboardComponent { 
	public title: string = 'Sheets';
	public firstSheet: Sheet;
	public sheets: Sheet[];

	constructor(inSheetService: SheetBackEnd) {
		//this.sheetService = inSheetService;
		this.sheets = inSheetService.getSomeSheets(0, 16);
	}

	getSheets() {
		return this.sheets;
	}

	/*load() {
		this.sheets = this.sheetService.getSomeSheets(4, 7)
		console.log(this.sheets[1].longTitle);
	}*/

	updateSheets(searchResult: Sheet[]) {
		this.sheets = searchResult;
	}
}

