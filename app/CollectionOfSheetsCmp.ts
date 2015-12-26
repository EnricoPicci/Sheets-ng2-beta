import {Component, Input} from 'angular2/core';

import {Sheet} from '../app/Sheet';
import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';
import {SheetFactory1} from '../app/SheetFactory1';

@Component({
    selector: 'collection-of-sheets-cmp',
	providers: [],
    templateUrl: '../templates/collectionOfSheets.html',
	styleUrls: ['../styles/table.css'],
	inputs: ['sheets'],
})
export class CollectionOfSheetsCmp { 
	@Input() sheets: Sheet[];
	sheetService: SheetService;

	/*constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
		this.sheets = inSheetService.getSomeSheets(0, 8);
	}*/


}

