import {Component, Input} from 'angular2/core';

import {Sheet} from './sheet';
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

}

