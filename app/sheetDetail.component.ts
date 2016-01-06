import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Sheet} from './sheet';
import {AssetGroup} from './assetGroup';
import {Asset} from './asset';
import {SheetFactory} from './sheetFactory';

import {ShortLongTextComponent} from '../utilities/shortLongText.component';
import {Slider} from '../utilities/slider.component'

@Component({
    selector: 'sheet-detail',
	providers: [],
    templateUrl: '../templates/sheetDetail.html',
    styleUrls: ['../styles/common.css', '../styles/sheetDetail.css'],
	directives: [ShortLongTextComponent, Slider],
    inputs: ['sheet'],
})
export class SheetDetailComponent implements OnInit { 
    public sheet: Sheet;
    public shortDescriptionTextLength: number = 250;
    
    public editStatus: boolean = false;
    
    constructor(
        private _routeParams: RouteParams,
        private _sheetFactory: SheetFactory
    ) { }
    
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.sheet = this._sheetFactory.getSheet(id);
        this._sheetFactory.fillDetails(this.sheet);
    }
    
    onAssetGroupClick(inAssetGroup: AssetGroup) {
        inAssetGroup.show = !inAssetGroup.show;
    }
    
    onClickOverCustomizeButton() {
        this.editStatus = !this.editStatus;
    }
    
    getCustomizeButtonText() {
        let ret: string;
        if (this.editStatus) {
            ret = 'Chiudi';
        } else {
            ret = 'Personalizza';
        }
        return ret;
    }
    
    onToggleLock(inAsset: Asset) {
        inAsset.locked = !inAsset.locked;
    }
    
    start: number[] = [30];
    range: any = {'min': 10, 'max': 50};
    pips: any = {mode: 'values',
                values: [10, 20, 30, 40, 50],
				density: 10}
    
    onEnd(inEvent: number[]) {
        console.log('app');
        console.log(inEvent);
    }
}