import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Sheet} from './sheet';

@Component({
    selector: 'sheet-detail',
	providers: [],
    templateUrl: '../templates/sheetDetail.html',
    styleUrls: ['../styles/sheetDetail.css'],
	directives: [],
    inputs: ['sheet'],
})
export class SheetDetailComponent implements OnInit { 
    public sheet: Sheet;
    constructor(
        private _router: Router,
        private _routeParams: RouteParams
    ) { }
    
      ngOnInit() {
          let id = this._routeParams.get('id');
          console.log(id);
      }
}