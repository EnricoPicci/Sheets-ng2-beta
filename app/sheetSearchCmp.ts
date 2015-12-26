import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {SheetSearchCriteria} from '../app/SheetSearchCriteria';
import {SearchSelection} from '../app/SearchSelection';
import {SheetService} from '../app/SheetService';
import {SheetFactory} from '../app/SheetFactory';
import {Sheet} from '../app/Sheet';

@Component({
    selector: 'sheetSearchCmp',
	providers: [],
    templateUrl: '../templates/sheetSearch.html', 
	styleUrls: ['../styles/sheetSearch.css'],
})
export class SheetSearchCmp { 
	sheetSearchCriteria: SheetSearchCriteria;
	public searchResult: Sheet[];
	@Output() sheetsRetrieved: EventEmitter<any> = new EventEmitter();

	constructor(inSheetService: SheetFactory) {
		this.sheetSearchCriteria = new SheetSearchCriteria(inSheetService);
	}

	onChange(selected: boolean, selection: SearchSelection) {
		selection.selected = selected;
		var criteria: SearchSelection[];
		
		criteria = this.sheetSearchCriteria.getGeneralDomain();
		var generalTags: string[] = new Array<string>();
		this.retrieveSelectedCriteria(criteria, generalTags);
		console.log('generalTags');
		console.log(generalTags);

		criteria = this.sheetSearchCriteria.getValueBasedDomain();
		var valueBasedTags: string[] = new Array<string>();
		this.retrieveSelectedCriteria(criteria, valueBasedTags);
		console.log('valueBasedTags');
		console.log(valueBasedTags);
		
		criteria = this.sheetSearchCriteria.getSectorsDomain();
		var sectorsTags: string[] = new Array<string>();
		this.retrieveSelectedCriteria(criteria, sectorsTags);
		console.log('sectorsTags');
		console.log(sectorsTags);
		
		var fact: SheetFactory = new SheetFactory();
		this.searchResult = fact.fetchSheets(null, generalTags, valueBasedTags, sectorsTags);
		this.sheetsRetrieved.next(this.searchResult);
	}
	
	retrieveSelectedCriteria(inCriteria: SearchSelection[], inTags: string[]) {
		for (var i = 0; i < inCriteria.length; i++) {
			if (inCriteria[i].selected) {
				inTags[i] = inCriteria[i].name;
				//console.log(inCriteria[i].name + ' ' + inCriteria[i].selected);
			}
		}
	}

	onClick() {
		console.log('click');
	}
	
}

