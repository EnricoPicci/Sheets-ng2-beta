import {Component} from 'angular2/core';
//import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SheetService} from './sheetService';
import {SheetFactory} from './sheetFactory';
import {SheetFactory1} from './sheetFactory1';
import {SheetCmp} from './sheetCmp';
import {Sheet} from './sheet';
import {CollectionOfSheetsCmp} from './collectionOfSheetsCmp';
import {SheetSearchCmp} from './sheetSearchCmp';
import {SheetSummaryComponent} from './sheetSummary.component';
import {SheetDetailComponent} from './sheetDetail.component';

@Component({
    selector: 'sheet-dashboard',
	providers: [],
    templateUrl: '../templates/sheetDashboard.html',
    styleUrls: ['../styles/app.css'],
	directives: [CollectionOfSheetsCmp, SheetSearchCmp],
})
/*@RouteConfig([
  {path: '/Sheet/:id', name: 'SheetSummary', component: SheetSummaryComponent},
  {path: '/SheetDetail/:id', name: 'SheetDetail', component: SheetDetailComponent},
])*/
export class SheetDashboardComponent { 
	public title: string = 'Sheets';
	public firstSheet: Sheet;
	public sheets: Sheet[];
	sheetService: SheetService;

	constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
		//this.firstSheet = inSheetService.getSheet('sheet1.jpg');
		this.sheets = inSheetService.getSomeSheets(0, 16);
	}

	getSheets() {
		return this.sheets;
	}

	load() {
		this.sheets = this.sheetService.getSomeSheets(4, 7)
		console.log(this.sheets[1].longTitle);
	}

	updateSheets(searchResult: Sheet[]) {
		//console.log('it is me');
		//console.log(searchResult);
		this.sheets = searchResult;
	}
}


//bootstrap(AppComponent, [provide(SheetFactory, {useClass: SheetFactory})]);
//bootstrap(AppComponent, [SheetFactory]);