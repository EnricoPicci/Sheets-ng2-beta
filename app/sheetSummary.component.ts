import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {Sheet} from './sheet';
import {SheetFactory} from './sheetFactory';
import {SheetDetailComponent} from './sheetDetail.component';

@Component({
    selector: 'sheet-summary',
	providers: [],
    templateUrl: '../templates/sheetSummary.html',
    styleUrls: ['../styles/sheetSummary.css'],
	directives: [ROUTER_DIRECTIVES],
    inputs: ['sheet', 'sheetId'],
})
export class SheetSummaryComponent implements OnInit { 
    public sheet: Sheet;
    //public sheetId: number;
    private _service: SheetFactory;
    private _router: Router;
    private _routeParams: RouteParams;
    
    constructor(inService: SheetFactory, inRouter: Router, inRouteParams: RouteParams) {
        this._service = inService;
        this._router = inRouter;
        this._routeParams = inRouteParams;
    }
    
    ngOnInit() {
        let id = +this._routeParams.get('id');
        console.log(id);
        if (id) {
            this.sheet = this._service.getSomeSheets(id, 1)[0];
            console.log(this.sheet);
        }
    }
    
    onMouseDown() {
        console.log(this.sheet);
        this._router.navigate( ['SheetDetail', { id: this.sheet.id }]  );
    }
}