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
        //inAsset.locked = !inAsset.locked;
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
    
    //start: number[] = [30];
    //range: any = {'min': 10, 'max': 50};
    /*pips: any = {mode: 'values',
                values: [10, 20, 30, 40, 50],
				density: 10}*/
    
    onEndOnAssetGroup(inEvent: number[], inAssetGroup: AssetGroup) {
        let newWeightValue = inEvent[0];
        let difference = newWeightValue - inAssetGroup.weight;
        if (difference > 0) {  // the difference is positivie; we are increasing
            let totalSpaceBelowMaxAvailabelForIncrease = 0;
            for (var i = 0; i < inAssetGroup.assets.length; i++) {
                if (!inAssetGroup.assets[i].locked) {  // assets locked are not considered
                    let spaceBelowMaxAvailabelForIncrease = inAssetGroup.assets[i].maxWeight - inAssetGroup.assets[i].weight;
                    totalSpaceBelowMaxAvailabelForIncrease = totalSpaceBelowMaxAvailabelForIncrease + spaceBelowMaxAvailabelForIncrease;
                }
            }
            if (totalSpaceBelowMaxAvailabelForIncrease > 0) {  // only if there is space to decrease we will change the weights of the assets
                let increaseOveraAvailableSpaceRatio = difference / totalSpaceBelowMaxAvailabelForIncrease;
                for (var i = 0; i < inAssetGroup.assets.length; i++) {
                    if (!inAssetGroup.assets[i].locked) { // assets locked are not considered
                        let spaceBelowMaxAvailabelForIncrease = inAssetGroup.assets[i].maxWeight - inAssetGroup.assets[i].weight;
                        inAssetGroup.assets[i].weight = spaceBelowMaxAvailabelForIncrease*increaseOveraAvailableSpaceRatio + inAssetGroup.assets[i].weight;
                        if (inAssetGroup.assets[i].weight > inAssetGroup.assets[i].maxWeight) {  // we can not move behind max
                            inAssetGroup.assets[i].weight = inAssetGroup.assets[i].maxWeight
                        }
                    }
                }
            }
        } else {  // the difference is negative; we are decreasing
            let totalSpaceBelowMaxAvailabelForDecrease = 0;
            for (var i = 0; i < inAssetGroup.assets.length; i++) {
                if (!inAssetGroup.assets[i].locked) { // assets locked are not considered
                    let spaceBelowMaxAvailabelForDecrease = inAssetGroup.assets[i].weight - inAssetGroup.assets[i].minWeight;
                    totalSpaceBelowMaxAvailabelForDecrease = totalSpaceBelowMaxAvailabelForDecrease + spaceBelowMaxAvailabelForDecrease;
                }
            }
            if (totalSpaceBelowMaxAvailabelForDecrease > 0) {  // only if there is space to increase we will change the weights of the assets
                let decreaseOveraAvailableSpaceRatio = difference / totalSpaceBelowMaxAvailabelForDecrease;
                for (var i = 0; i < inAssetGroup.assets.length; i++) {
                    if (!inAssetGroup.assets[i].locked) {  // assets locked are not considered
                        let spaceAboveMinAvailabelForDecrease = inAssetGroup.assets[i].weight - inAssetGroup.assets[i].minWeight;
                        inAssetGroup.assets[i].weight = inAssetGroup.assets[i].weight + spaceAboveMinAvailabelForDecrease*decreaseOveraAvailableSpaceRatio;
                        if (inAssetGroup.assets[i].weight < inAssetGroup.assets[i].minWeight) {  // we can not move below min
                            inAssetGroup.assets[i].weight = inAssetGroup.assets[i].minWeight
                        }
                    }
                }
            }
        }
        let realNewWeightValue = 0;  // considering that we may have adjusted the weights of the single assets based on their min&max, we need to recalculate te weight of the assetGroup
        for (var i = 0; i < inAssetGroup.assets.length; i++) {
            realNewWeightValue = realNewWeightValue + inAssetGroup.assets[i].weight;
        }
        inAssetGroup.weight = realNewWeightValue;
        inAssetGroup.newValue = realNewWeightValue;  // I need to simplify; if I change the value of the assetGroup I need to update the slider with no need of using newValue
    }
    
    onEndOnAsset(inEvent: number[], inAsset: Asset) {
        let newWeightValue = inEvent[0];
        let difference = newWeightValue - inAsset.weight;
        if (difference > 0) {  // the difference is positivie; we are increasing
            
        } else {  // the difference is negative; we are decreasing
            
        }
     }
}