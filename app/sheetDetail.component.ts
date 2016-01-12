import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Sheet} from './sheet';
import {AssetGroup} from './assetGroup';
import {Asset} from './asset';
import {AssetAbstract} from './assetAbstract';
import {SheetFactory} from './sheetFactory';

import {ShortLongTextComponent} from '../utilities/shortLongText.component';
import {Slider} from '../utilities/slider.component'
import {SheetWeightAdjuster} from './sheetWeightAdjuster.service';

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
    
    public editStatus = false;
    public startOfScaleRelative = false;  // if false, all sliders start from ZERO, otherwise their starting position increases based on the sum of the range of the previous assets
    
    constructor(
        private _routeParams: RouteParams,
        private _sheetFactory: SheetFactory,
        private _sheetWeightAdjuster: SheetWeightAdjuster
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
    
    onClickOverRelativeScaleButton() {
        this.startOfScaleRelative = !this.startOfScaleRelative;
        this._sheetWeightAdjuster.setRelativeStartOfScale(this.sheet.assetGroups);
    }
    
    getRelativeScaleButtonText() {
        let ret: string;
        let ret1: string;
        if (this.startOfScaleRelative) {
            ret1 = 'Scala assoluta';
        } else {
            ret1 = 'Scala relativa';
        }
        ret = ret1;
        return ret1;        
    }
    
    onToggleLock(inAsset: AssetAbstract) {
        inAsset.setLocked(!inAsset.locked);
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
    
    onEndOnAssetGroup(inEvent: number[], inAssetGroup: AssetGroup) {
        let newWeightValue = inEvent[0];
        this._sheetWeightAdjuster.adjustAfterChangeInAssetGroupWeight(newWeightValue, inAssetGroup);
        this._sheetWeightAdjuster.setRelativeStartOfScale(this.sheet.assetGroups);
    }
    
    onEndOnAsset(inEvent: number[], inAsset: Asset) {
        let newWeightValue = inEvent[0];
        this._sheetWeightAdjuster.adjustAfterChangeInAssetWeight(newWeightValue, inAsset);
        this._sheetWeightAdjuster.setRelativeStartOfScale(this.sheet.assetGroups);
     }
     
}