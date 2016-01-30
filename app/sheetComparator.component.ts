import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Sheet} from './sheet';
import {SheetBackEnd} from './sheetBackEnd.service';

import {SheetInfoComponent} from './sheetInfo.component'
import {SheetReturnData} from './sheetReturnData.component'
import {SheetCompositionCharts} from './sheetCompositionCharts.component'
import {SheetAssetCompositionComponent} from './sheetAssetComposition.component';

@Component({
    selector: 'sheet-comparator',
	providers: [],
    templateUrl: '../templates/sheetComparator.html',
    styleUrls: ['../styles/common.css', '../styles/sheetDetail.css'],
	directives: [SheetAssetCompositionComponent, SheetReturnData, SheetCompositionCharts, SheetInfoComponent],
    inputs: ['sheet1', 'sheet2'],
})
export class SheetComparatorComponent { 
    public sheet1: Sheet;
    public sheet2: Sheet;
    public sheets: Sheet[] = new Array<Sheet>();
    
    constructor(
        private _routeParams: RouteParams,
        private _sheetBackEnd: SheetBackEnd
    ) { }    
        
    ngOnInit() {
        let id1 = +this._routeParams.get('idSheetToCompare1');
        let id2 = +this._routeParams.get('idSheetToCompare2');
        this.sheet1 = this._sheetBackEnd.getSheet(id1);
        this.sheet2 = this._sheetBackEnd.getSheet(id2);
        this._sheetBackEnd.fillDetails(this.sheet1);
        this._sheetBackEnd.fillDetails(this.sheet2);
        this.sheets.push(this.sheet1);
        this.sheets.push(this.sheet2);
    }
}