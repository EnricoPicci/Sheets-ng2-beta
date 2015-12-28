import {Component, Input} from 'angular2/core';

import {Sheet} from './sheet';
import {SheetService} from './sheetService';
import {SheetFactory} from './sheetFactory';
import {SheetFactory1} from './sheetFactory1';
import {SheetSummaryComponent} from './sheetSummary.component';

@Component({
    selector: 'collection-of-sheets-cmp',
	providers: [],
    templateUrl: '../templates/collectionOfSheets.html',
	styleUrls: ['../styles/table.css'],
    directives: [SheetSummaryComponent],
	inputs: ['sheets'],
})
export class CollectionOfSheetsCmp { 
	@Input() sheets: Sheet[];
	//sheetService: SheetService;

	/*constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
		this.sheets = inSheetService.getSomeSheets(0, 8);
	}*/


}

