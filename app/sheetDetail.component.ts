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
    
    onEndOnAssetGroup(inEvent: number[], inAssetGroup: AssetGroup) {
        let newWeightValue = inEvent[0];
        let change = newWeightValue - inAssetGroup.weight;
        let assetGroups = inAssetGroup.sheet.assetGroups;        
        if (change > 0) {  // the difference is positive; we are increasing an Asset Group and therefore we need to decrease the others
            let totalSpaceAvailableForDecrease = 0;
            for (var i = 0; i < assetGroups.length; i++) {
                if (!assetGroups[i].locked && !(assetGroups[i] == inAssetGroup)) {  // asset groupss locked are not considered as well as the asset group whose weight has been changed
                    let spaceAboveMinAvailabelForDecrease = assetGroups[i].weight - assetGroups[i].minWeight;
                    totalSpaceAvailableForDecrease = totalSpaceAvailableForDecrease + spaceAboveMinAvailabelForDecrease;
                }
            }  
            //console.log('total space 2 decrease --' + totalSpaceAvailableForDecrease);
            let decreaseCorrectionFactor = 0;
            if (totalSpaceAvailableForDecrease < change) {
                decreaseCorrectionFactor = change - totalSpaceAvailableForDecrease;
            }            
            //console.log('decrease correction factor --' + decreaseCorrectionFactor);
            let decreaseOveraAvailableSpaceRatio = (change - decreaseCorrectionFactor) / totalSpaceAvailableForDecrease;
            //console.log('decrease ratio --' + decreaseOveraAvailableSpaceRatio);  
            for (var i = 0; i < assetGroups.length; i++) {
                if (!assetGroups[i].locked && !(assetGroups[i] == inAssetGroup)) {  // asset groups locked are not considered as well as the asset group whose weight has been changed
                    console.log('asset group weight ' + i + '--' + assetGroups[i].weight);
                    console.log('asset group max weight ' + i + '--' + assetGroups[i].maxWeight);
                    let spaceToIncreaseForAssetGroup = assetGroups[i].maxWeight - assetGroups[i].weight;
                    //let spaceToDecreaseForAssetGroup = assetGroups[i].weight - assetGroups[i].minWeight;
                    console.log('spaceToIncreaseForAssetGroup ' + i + '--' + spaceToIncreaseForAssetGroup);
                    //console.log('spaceToDecreaseForAssetGroup ' + i + '--' + spaceToDecreaseForAssetGroup);
                    for (var j = 0; j < assetGroups[i].assets.length; j++) {
                        let asset = assetGroups[i].assets[j];
                        let variation = (asset.weight - asset.minWeight)*decreaseOveraAvailableSpaceRatio;
                        console.log('asset variation ' + asset.name + '--' + variation);
                        /*let spaceToIncreaseForAsset = asset.maxWeight - asset.weight;
                        console.log('asset spaceToIncreaseForAsset ' + asset.name + '--' + spaceToIncreaseForAsset);
                        let variation = spaceToIncreaseForAsset/spaceToIncreaseForAssetGroup*(change - decreaseCorrectionFactor);
                        console.log('asset variation ' + asset.name + '--' + variation);*/                        
                        asset.weight = asset.weight - variation;
                        console.log('asset weight ' + asset.name + '--' + asset.weight);
                    }
                    let spaceAboveMinAvailabelForDecrease = assetGroups[i].weight - assetGroups[i].minWeight;
                    let variation = spaceAboveMinAvailabelForDecrease*decreaseOveraAvailableSpaceRatio;
                    assetGroups[i].weight = assetGroups[i].weight - variation;
                }
            }
            let spaceToIncreaseForAssetGroup = inAssetGroup.maxWeight - inAssetGroup.weight;
            for (var j = 0; j < inAssetGroup.assets.length; j++) {
                let asset = inAssetGroup.assets[j];
                let spaceToIncreaseForAsset = asset.maxWeight - asset.weight;
                let variation = spaceToIncreaseForAsset/spaceToIncreaseForAssetGroup*(change - decreaseCorrectionFactor);
                asset.weight = asset.weight + variation;
            } 
            inAssetGroup.weight = inAssetGroup.weight + change - decreaseCorrectionFactor;           
        } else {  // the difference is negative; we are decreasing an Asset Group and therefore we need to increase the others
            let totalSpaceAvailabelForIncrease = 0;
            for (var i = 0; i < assetGroups.length; i++) {
                if (!assetGroups[i].locked && !(assetGroups[i] == inAssetGroup)) {  // asset groups locked are not considered as well as the asset group whose weight has been changed
                    let spaceBelowMaxAvailabelForIncrease = assetGroups[i].maxWeight - assetGroups[i].weight;
                    totalSpaceAvailabelForIncrease = totalSpaceAvailabelForIncrease + spaceBelowMaxAvailabelForIncrease;
                }
            }  
            //console.log('total space 2 increase --' + totalSpaceAvailabelForIncrease);
            let increaseCorrectionFactor = 0;
            if (totalSpaceAvailabelForIncrease < -change) {
                increaseCorrectionFactor = -change - totalSpaceAvailabelForIncrease;
            }
            console.log('increase correction factor --' + increaseCorrectionFactor);    
            let increaseOveraAvailableSpaceRatio = (change + increaseCorrectionFactor) / totalSpaceAvailabelForIncrease;       
            console.log('increase ratio --' + increaseOveraAvailableSpaceRatio);  
            for (var i = 0; i < assetGroups.length; i++) {
                if (!assetGroups[i].locked && !(assetGroups[i] == inAssetGroup)) {  // asset groups locked are not considered as well as the asset group whose weight has been changed
                    console.log('asset group weight ' + i + '--' + assetGroups[i].weight);
                    let spaceToDecreaseForAssetGroup = assetGroups[i].weight - assetGroups[i].minWeight;
                    //let spaceToIncreaseForAssetGroup = assetGroups[i].maxWeight - assetGroups[i].weight;
                    console.log('spaceToDecreaseForAssetGroup ' + i + '--' + spaceToDecreaseForAssetGroup);
                    for (var j = 0; j < assetGroups[i].assets.length; j++) {
                        let asset = assetGroups[i].assets[j];
                        let variation = (asset.maxWeight - asset.weight)*increaseOveraAvailableSpaceRatio;
                        /*let spaceToDecreaseForAsset = asset.weight - asset.minWeight;
                        console.log('asset spaceToDecreaseForAsset ' + asset.name + '--' + spaceToDecreaseForAsset);
                        let variation = spaceToDecreaseForAsset/spaceToDecreaseForAssetGroup*(change - increaseCorrectionFactor);*/                        
                        asset.weight = asset.weight - variation;
                        console.log('asset weight ' + asset.name + '--' + asset.weight);
                    }
                    let spaceBelowMaxAvailabelForIncrease = assetGroups[i].maxWeight - assetGroups[i].weight;
                    let variation = spaceBelowMaxAvailabelForIncrease*increaseOveraAvailableSpaceRatio;
                    assetGroups[i].weight = assetGroups[i].weight - variation;                    
                }
            }
            let spaceToDecreaseForAssetGroup = inAssetGroup.weight - inAssetGroup.minWeight;
            for (var j = 0; j < inAssetGroup.assets.length; j++) {
                let asset = inAssetGroup.assets[j];
                let spaceToDecreaseForAsset = asset.weight - asset.minWeight;
                let variation = spaceToDecreaseForAsset/spaceToDecreaseForAssetGroup*(change - increaseCorrectionFactor);
                asset.weight = asset.weight + variation;
            }            
            inAssetGroup.weight = inAssetGroup.weight + change - increaseCorrectionFactor;            
        }
        for (var i = 0; i < assetGroups.length; i++) {
            assetGroups[i].checkConsistency();
        }
    }
    
    onEndOnAsset(inEvent: number[], inAsset: Asset) {
        let newWeightValue = inEvent[0];
        let change = newWeightValue - inAsset.weight;
        if (change > 0) {  // the difference is positive; we are increasing the weight of one asset change and need to decrease the weight of the others to maintain Asset Group total weight unchanged
            let totalSpaceAvailableForDecrease = 0;
            let assetsOfGroup = inAsset.assetGroup.assets;
            for (var i = 0; i < assetsOfGroup.length; i++) {
                if (!assetsOfGroup[i].locked && !(assetsOfGroup[i] == inAsset)) {  // assets locked are not considered as well as the asset whose weight has been changed
                    let spaceAboveMinAvailabelForDecrease = assetsOfGroup[i].weight - assetsOfGroup[i].minWeight;
                    totalSpaceAvailableForDecrease = totalSpaceAvailableForDecrease + spaceAboveMinAvailabelForDecrease;
                }
            }  
            //console.log('total space 2 decrease --' + totalSpaceAvailableForDecrease);
            let decreaseCorrectionFactor = 0;
            if (totalSpaceAvailableForDecrease < change) {
                decreaseCorrectionFactor = change - totalSpaceAvailableForDecrease;
            }
            //console.log('decrease correction factor --' + decreaseCorrectionFactor);
            let decreaseOveraAvailableSpaceRatio = (change - decreaseCorrectionFactor) / totalSpaceAvailableForDecrease;
            //console.log('decrease ratio --' + decreaseOveraAvailableSpaceRatio);  
            for (var i = 0; i < assetsOfGroup.length; i++) {
                if (!assetsOfGroup[i].locked && !(assetsOfGroup[i] == inAsset)) {  // assets locked are not considered as well as the asset whose weight has been changed
                    let spaceAboveMinAvailabelForDecrease = assetsOfGroup[i].weight - assetsOfGroup[i].minWeight;
                    let variation = spaceAboveMinAvailabelForDecrease*decreaseOveraAvailableSpaceRatio;
                    assetsOfGroup[i].weight = assetsOfGroup[i].weight - variation;
                    //console.log('asset weight ' + i + '--' + assetsOfGroup[i].weight);
                }
            }
            inAsset.weight = inAsset.weight + change - decreaseCorrectionFactor;
            //console.log('asset changed weight --' + inAsset.weight);
        } else {  // the difference is negative; we are decreasing the weight of one asset change and need to increase the weight of the others to maintain Asset Group total weight unchanged
            let totalSpaceAvailabelForIncrease = 0;
            let assetsOfGroup = inAsset.assetGroup.assets;
            for (var i = 0; i < assetsOfGroup.length; i++) {
                if (!assetsOfGroup[i].locked && !(assetsOfGroup[i] == inAsset)) {  // assets locked are not considered as well as the asset whose weight has been changed
                    let spaceBelowMaxAvailabelForIncrease = assetsOfGroup[i].maxWeight - assetsOfGroup[i].weight;
                    totalSpaceAvailabelForIncrease = totalSpaceAvailabelForIncrease + spaceBelowMaxAvailabelForIncrease;
                }
            }  
            //console.log('total space 2 increase --' + totalSpaceAvailabelForIncrease);
            let increaseCorrectionFactor = 0;
            if (totalSpaceAvailabelForIncrease < -change) {
                increaseCorrectionFactor = -change - totalSpaceAvailabelForIncrease;
            }
            //console.log('increase correction factor --' + increaseCorrectionFactor);    
            let increaseOveraAvailableSpaceRatio = (change + increaseCorrectionFactor) / totalSpaceAvailabelForIncrease;       
            console.log('increase ratio --' + increaseOveraAvailableSpaceRatio);  
            for (var i = 0; i < assetsOfGroup.length; i++) {
                if (!assetsOfGroup[i].locked && !(assetsOfGroup[i] == inAsset)) {  // assets locked are not considered as well as the asset whose weight has been changed
                    let spaceBelowMaxAvailabelForIncrease = assetsOfGroup[i].maxWeight - assetsOfGroup[i].weight;
                    let variation = spaceBelowMaxAvailabelForIncrease*increaseOveraAvailableSpaceRatio;
                    assetsOfGroup[i].weight = assetsOfGroup[i].weight - variation;
                    //console.log('asset weight ' + i + '--' + assetsOfGroup[i].weight);
                }
            }
            inAsset.weight = inAsset.weight + change + increaseCorrectionFactor;
            //console.log('asset changed weight --' + inAsset.weight);            
        }
        inAsset.assetGroup.checkConsistency();
        
     }
}