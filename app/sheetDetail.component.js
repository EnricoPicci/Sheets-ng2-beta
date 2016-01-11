System.register(['angular2/core', 'angular2/router', './sheetFactory', '../utilities/shortLongText.component', '../utilities/slider.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, sheetFactory_1, shortLongText_component_1, slider_component_1;
    var SheetDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sheetFactory_1_1) {
                sheetFactory_1 = sheetFactory_1_1;
            },
            function (shortLongText_component_1_1) {
                shortLongText_component_1 = shortLongText_component_1_1;
            },
            function (slider_component_1_1) {
                slider_component_1 = slider_component_1_1;
            }],
        execute: function() {
            SheetDetailComponent = (function () {
                function SheetDetailComponent(_routeParams, _sheetFactory) {
                    this._routeParams = _routeParams;
                    this._sheetFactory = _sheetFactory;
                    this.shortDescriptionTextLength = 250;
                    this.editStatus = false;
                }
                SheetDetailComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    this.sheet = this._sheetFactory.getSheet(id);
                    this._sheetFactory.fillDetails(this.sheet);
                };
                SheetDetailComponent.prototype.onAssetGroupClick = function (inAssetGroup) {
                    inAssetGroup.show = !inAssetGroup.show;
                };
                SheetDetailComponent.prototype.onClickOverCustomizeButton = function () {
                    this.editStatus = !this.editStatus;
                };
                SheetDetailComponent.prototype.getCustomizeButtonText = function () {
                    var ret;
                    if (this.editStatus) {
                        ret = 'Chiudi';
                    }
                    else {
                        ret = 'Personalizza';
                    }
                    return ret;
                };
                SheetDetailComponent.prototype.onToggleLock = function (inAsset) {
                    //inAsset.locked = !inAsset.locked;
                    inAsset.setLocked(!inAsset.locked);
                };
                SheetDetailComponent.prototype.getStart = function (inAsset) {
                    return inAsset.weight;
                };
                SheetDetailComponent.prototype.getRange = function (inAsset) {
                    return inAsset.range;
                };
                SheetDetailComponent.prototype.getPips = function (inAsset) {
                    return inAsset.pips;
                };
                SheetDetailComponent.prototype.onEndOnAssetGroup = function (inEvent, inAssetGroup) {
                    var newWeightValue = inEvent[0];
                    var change = 0;
                    var requestedChange = newWeightValue - inAssetGroup.weight;
                    var availableSpaceForChange = 0;
                    var assets = inAssetGroup.assets;
                    if (requestedChange > 0) {
                        availableSpaceForChange = this.calculateSpaceBelowMaxAvailabelForIncrease(inAssetGroup);
                        if (requestedChange < availableSpaceForChange) {
                            change = requestedChange;
                        }
                        else {
                            change = availableSpaceForChange;
                        }
                    }
                    else {
                        availableSpaceForChange = -this.calculateSpaceAboveMinAvailabelForDecrease(inAssetGroup);
                        if (requestedChange > availableSpaceForChange) {
                            change = requestedChange;
                        }
                        else {
                            change = availableSpaceForChange;
                        }
                    }
                    var assetGroups = inAssetGroup.sheet.assetGroups;
                    if (change == 0) {
                        inAssetGroup.weight = this.calculateWeight(inAssetGroup); // we recalculate the weight to override what has been set by the change input by the user
                    }
                    else if (change > 0) {
                        var totalSpaceAvailableForDecrease = 0;
                        for (var i = 0; i < assetGroups.length; i++) {
                            if (!assetGroups[i].locked && !(assetGroups[i] == inAssetGroup)) {
                                var spaceAboveMinAvailabelForDecrease = this.calculateSpaceAboveMinAvailabelForDecrease(assetGroups[i]);
                                totalSpaceAvailableForDecrease = totalSpaceAvailableForDecrease + spaceAboveMinAvailabelForDecrease;
                            }
                        }
                        //console.log('total space 2 decrease --' + totalSpaceAvailableForDecrease);
                        var decreaseCorrectionFactor = 0;
                        if (totalSpaceAvailableForDecrease < change) {
                            decreaseCorrectionFactor = change - totalSpaceAvailableForDecrease;
                        }
                        //console.log('decrease correction factor --' + decreaseCorrectionFactor);
                        var decreaseOveraAvailableSpaceRatio = (change - decreaseCorrectionFactor) / totalSpaceAvailableForDecrease;
                        //console.log('decrease ratio --' + decreaseOveraAvailableSpaceRatio);  
                        for (var i = 0; i < assetGroups.length; i++) {
                            if (!assetGroups[i].locked && !(assetGroups[i] == inAssetGroup)) {
                                console.log('asset group weight ' + i + '--' + assetGroups[i].weight);
                                console.log('asset group max weight ' + i + '--' + assetGroups[i].maxWeight);
                                var spaceToIncreaseForAssetGroup_1 = assetGroups[i].maxWeight - assetGroups[i].weight;
                                console.log('spaceToIncreaseForAssetGroup ' + i + '--' + spaceToIncreaseForAssetGroup_1);
                                //console.log('spaceToDecreaseForAssetGroup ' + i + '--' + spaceToDecreaseForAssetGroup);
                                for (var j = 0; j < assetGroups[i].assets.length; j++) {
                                    var asset = assetGroups[i].assets[j];
                                    if (!asset.locked) {
                                        var variation_1 = (asset.weight - asset.minWeight) * decreaseOveraAvailableSpaceRatio;
                                        console.log('asset variation ' + asset.name + '--' + variation_1);
                                        asset.weight = asset.weight - variation_1;
                                        console.log('asset weight ' + asset.name + '--' + asset.weight);
                                    }
                                }
                                //let spaceAboveMinAvailabelForDecrease = assetGroups[i].weight - assetGroups[i].minWeight;
                                var spaceAboveMinAvailabelForDecrease = this.calculateSpaceAboveMinAvailabelForDecrease(assetGroups[i]);
                                var variation = spaceAboveMinAvailabelForDecrease * decreaseOveraAvailableSpaceRatio;
                                assetGroups[i].weight = assetGroups[i].weight - variation;
                            }
                        }
                        //let spaceToIncreaseForAssetGroup = inAssetGroup.maxWeight - inAssetGroup.weight;
                        var spaceToIncreaseForAssetGroup = this.calculateSpaceBelowMaxAvailabelForIncrease(inAssetGroup);
                        for (var j = 0; j < inAssetGroup.assets.length; j++) {
                            var asset = inAssetGroup.assets[j];
                            if (!asset.locked) {
                                var spaceToIncreaseForAsset = asset.maxWeight - asset.weight;
                                var variation = spaceToIncreaseForAsset / spaceToIncreaseForAssetGroup * (change - decreaseCorrectionFactor);
                                asset.weight = asset.weight + variation;
                            }
                        }
                        inAssetGroup.weight = inAssetGroup.weight + change - decreaseCorrectionFactor;
                    }
                    else {
                        var totalSpaceAvailabelForIncrease = 0;
                        for (var i = 0; i < assetGroups.length; i++) {
                            if (!assetGroups[i].locked && !(assetGroups[i] == inAssetGroup)) {
                                var spaceBelowMaxAvailabelForIncrease = this.calculateSpaceBelowMaxAvailabelForIncrease(assetGroups[i]);
                                totalSpaceAvailabelForIncrease = totalSpaceAvailabelForIncrease + spaceBelowMaxAvailabelForIncrease;
                            }
                        }
                        //console.log('total space 2 increase --' + totalSpaceAvailabelForIncrease);
                        var increaseCorrectionFactor = 0;
                        if (totalSpaceAvailabelForIncrease < -change) {
                            increaseCorrectionFactor = -change - totalSpaceAvailabelForIncrease;
                        }
                        //console.log('increase correction factor --' + increaseCorrectionFactor);    
                        var increaseOveraAvailableSpaceRatio = (change + increaseCorrectionFactor) / totalSpaceAvailabelForIncrease;
                        //console.log('increase ratio --' + increaseOveraAvailableSpaceRatio);  
                        for (var i = 0; i < assetGroups.length; i++) {
                            if (!assetGroups[i].locked && !(assetGroups[i] == inAssetGroup)) {
                                //console.log('asset group weight ' + i + '--' + assetGroups[i].weight);
                                //let spaceToDecreaseForAssetGroup = assetGroups[i].weight - assetGroups[i].minWeight;
                                var spaceToDecreaseForAssetGroup_1 = this.calculateSpaceAboveMinAvailabelForDecrease(assetGroups[i]);
                                //console.log('spaceToDecreaseForAssetGroup ' + i + '--' + spaceToDecreaseForAssetGroup);
                                for (var j = 0; j < assetGroups[i].assets.length; j++) {
                                    var asset = assetGroups[i].assets[j];
                                    if (!asset.locked) {
                                        var variation_2 = (asset.maxWeight - asset.weight) * increaseOveraAvailableSpaceRatio;
                                        asset.weight = asset.weight - variation_2;
                                        console.log('asset weight ' + asset.name + '--' + asset.weight);
                                    }
                                }
                                //let spaceBelowMaxAvailabelForIncrease = assetGroups[i].maxWeight - assetGroups[i].weight;
                                var spaceBelowMaxAvailabelForIncrease = this.calculateSpaceBelowMaxAvailabelForIncrease(assetGroups[i]);
                                var variation = spaceBelowMaxAvailabelForIncrease * increaseOveraAvailableSpaceRatio;
                                assetGroups[i].weight = assetGroups[i].weight - variation;
                            }
                        }
                        //let spaceToDecreaseForAssetGroup = inAssetGroup.weight - inAssetGroup.minWeight;
                        var spaceToDecreaseForAssetGroup = this.calculateSpaceAboveMinAvailabelForDecrease(inAssetGroup);
                        for (var j = 0; j < inAssetGroup.assets.length; j++) {
                            var asset = inAssetGroup.assets[j];
                            if (!asset.locked) {
                                var spaceToDecreaseForAsset = asset.weight - asset.minWeight;
                                var variation = spaceToDecreaseForAsset / spaceToDecreaseForAssetGroup * (change - increaseCorrectionFactor);
                                asset.weight = asset.weight + variation;
                            }
                        }
                        inAssetGroup.weight = inAssetGroup.weight + change - increaseCorrectionFactor;
                    }
                    for (var i = 0; i < assetGroups.length; i++) {
                        assetGroups[i].checkConsistency();
                    }
                };
                SheetDetailComponent.prototype.onEndOnAsset = function (inEvent, inAsset) {
                    var newWeightValue = inEvent[0];
                    var change = newWeightValue - inAsset.weight;
                    if (change > 0) {
                        var totalSpaceAvailableForDecrease = 0;
                        var assetsOfGroup = inAsset.assetGroup.assets;
                        for (var i = 0; i < assetsOfGroup.length; i++) {
                            if (!assetsOfGroup[i].locked && !(assetsOfGroup[i] == inAsset)) {
                                var spaceAboveMinAvailabelForDecrease = assetsOfGroup[i].weight - assetsOfGroup[i].minWeight;
                                totalSpaceAvailableForDecrease = totalSpaceAvailableForDecrease + spaceAboveMinAvailabelForDecrease;
                            }
                        }
                        //console.log('total space 2 decrease --' + totalSpaceAvailableForDecrease);
                        var decreaseCorrectionFactor = 0;
                        if (totalSpaceAvailableForDecrease < change) {
                            decreaseCorrectionFactor = change - totalSpaceAvailableForDecrease;
                        }
                        //console.log('decrease correction factor --' + decreaseCorrectionFactor);
                        var decreaseOveraAvailableSpaceRatio = (change - decreaseCorrectionFactor) / totalSpaceAvailableForDecrease;
                        //console.log('decrease ratio --' + decreaseOveraAvailableSpaceRatio);  
                        for (var i = 0; i < assetsOfGroup.length; i++) {
                            if (!assetsOfGroup[i].locked && !(assetsOfGroup[i] == inAsset)) {
                                var spaceAboveMinAvailabelForDecrease = assetsOfGroup[i].weight - assetsOfGroup[i].minWeight;
                                var variation = spaceAboveMinAvailabelForDecrease * decreaseOveraAvailableSpaceRatio;
                                assetsOfGroup[i].weight = assetsOfGroup[i].weight - variation;
                            }
                        }
                        inAsset.weight = inAsset.weight + change - decreaseCorrectionFactor;
                    }
                    else {
                        var totalSpaceAvailabelForIncrease = 0;
                        var assetsOfGroup = inAsset.assetGroup.assets;
                        for (var i = 0; i < assetsOfGroup.length; i++) {
                            if (!assetsOfGroup[i].locked && !(assetsOfGroup[i] == inAsset)) {
                                var spaceBelowMaxAvailabelForIncrease = assetsOfGroup[i].maxWeight - assetsOfGroup[i].weight;
                                totalSpaceAvailabelForIncrease = totalSpaceAvailabelForIncrease + spaceBelowMaxAvailabelForIncrease;
                            }
                        }
                        //console.log('total space 2 increase --' + totalSpaceAvailabelForIncrease);
                        var increaseCorrectionFactor = 0;
                        if (totalSpaceAvailabelForIncrease < -change) {
                            increaseCorrectionFactor = -change - totalSpaceAvailabelForIncrease;
                        }
                        //console.log('increase correction factor --' + increaseCorrectionFactor);    
                        var increaseOveraAvailableSpaceRatio = (change + increaseCorrectionFactor) / totalSpaceAvailabelForIncrease;
                        console.log('increase ratio --' + increaseOveraAvailableSpaceRatio);
                        for (var i = 0; i < assetsOfGroup.length; i++) {
                            if (!assetsOfGroup[i].locked && !(assetsOfGroup[i] == inAsset)) {
                                var spaceBelowMaxAvailabelForIncrease = assetsOfGroup[i].maxWeight - assetsOfGroup[i].weight;
                                var variation = spaceBelowMaxAvailabelForIncrease * increaseOveraAvailableSpaceRatio;
                                assetsOfGroup[i].weight = assetsOfGroup[i].weight - variation;
                            }
                        }
                        inAsset.weight = inAsset.weight + change + increaseCorrectionFactor;
                    }
                    inAsset.assetGroup.checkConsistency();
                };
                SheetDetailComponent.prototype.calculateSpaceBelowMaxAvailabelForIncrease = function (inAssetGroup) {
                    var availableSpaceForChange = 0;
                    var assets = inAssetGroup.assets;
                    for (var i = 0; i < assets.length; i++) {
                        if (!assets[i].locked) {
                            availableSpaceForChange = availableSpaceForChange + (assets[i].maxWeight - assets[i].weight);
                        }
                    }
                    return availableSpaceForChange;
                };
                SheetDetailComponent.prototype.calculateSpaceAboveMinAvailabelForDecrease = function (inAssetGroup) {
                    var availableSpaceForChange = 0;
                    var assets = inAssetGroup.assets;
                    for (var i = 0; i < assets.length; i++) {
                        if (!assets[i].locked) {
                            availableSpaceForChange = availableSpaceForChange + (assets[i].weight - assets[i].minWeight);
                        }
                    }
                    return availableSpaceForChange;
                };
                SheetDetailComponent.prototype.calculateWeight = function (inAssetGroup) {
                    var realWeight = 0;
                    var assets = inAssetGroup.assets;
                    for (var i = 0; i < assets.length; i++) {
                        realWeight = realWeight + assets[i].weight;
                    }
                    return realWeight;
                };
                SheetDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'sheet-detail',
                        providers: [],
                        templateUrl: '../templates/sheetDetail.html',
                        styleUrls: ['../styles/common.css', '../styles/sheetDetail.css'],
                        directives: [shortLongText_component_1.ShortLongTextComponent, slider_component_1.Slider],
                        inputs: ['sheet'],
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, sheetFactory_1.SheetFactory])
                ], SheetDetailComponent);
                return SheetDetailComponent;
            })();
            exports_1("SheetDetailComponent", SheetDetailComponent);
        }
    }
});
//# sourceMappingURL=sheetDetail.component.js.map