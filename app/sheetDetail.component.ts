import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Sheet} from './sheet';
import {AssetGroup} from './assetGroup';
import {Asset} from './asset';
import {AssetAbstract} from './assetAbstract';
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
    
    onToggleLock(inAsset: AssetAbstract) {
        inAsset.locked = !inAsset.locked;
    }
    
    getStart(inAsset: Asset) {
        return inAsset.weight;
    }
    
    getRange(inAsset: AssetAbstract) {
        return inAsset.range;
    }
    
    getPips(inAsset: AssetAbstract) {
        return inAsset.pips;
    }
    
    //start: number[] = [30];
    //range: any = {'min': 10, 'max': 50};
    /*pips: any = {mode: 'values',
                values: [10, 20, 30, 40, 50],
				density: 10}*/
    
    onEndOnAssetGroup(inEvent: number[], inAssetGroup: AssetGroup) {
        let newWeightValue = inEvent[0];
        let difference = newWeightValue - inAssetGroup.weight;
        let changeRatio = (newWeightValue - difference)/inAssetGroup.weight;
        for (var i = 0; i < inAssetGroup.assets.length; i++) {
            let oldAssetWeight = inAssetGroup.assets[i].weight;
            inAssetGroup.assets[i].weight = oldAssetWeight*changeRatio;
        }
        inAssetGroup.weight = newWeightValue;
    }
    
    onEndOnAsset(inEvent: number[]) {
        console.log('end on asset');
        console.log(inEvent);
    }
}