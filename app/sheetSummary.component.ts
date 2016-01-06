import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {Sheet} from './sheet';
import {SheetFactory} from './sheetFactory';
import {SheetDetailComponent} from './sheetDetail.component';

@Component({
    selector: 'sheet-summary',
	providers: [],
    templateUrl: '../templates/sheetSummary.html',
    styleUrls: ['../styles/common.css', '../styles/sheetSummary.css'],
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
        // only if the routeParameter is not null we go to the service
        // this is because if the routeParameter is not null, it means we have been called via routing (or url on the browser)
        // if id is null it means we have been called within the single-page (and we hope we have been passed the full Sheet instance)
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