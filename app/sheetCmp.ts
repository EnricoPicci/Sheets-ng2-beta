import {Component, Input} from 'angular2/core';


import {Sheet} from '../app/sheet';

@Component({
    selector: 'sheetCmp',
	providers: [],
    template: `
    	<div>
			<h1>{{sheet.title}}</h1>
			<h2>{{sheet.longTitle}}</h2>
			<image src= {{sheet.imageUrl}}></image>
		</div>
		`,
})
export class SheetCmp { 
	@Input() sheet: Sheet;

	constructor() {
	}


}

