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
                //start: number[] = [30];
                //range: any = {'min': 10, 'max': 50};
                /*pips: any = {mode: 'values',
                            values: [10, 20, 30, 40, 50],
                            density: 10}*/
                SheetDetailComponent.prototype.onEndOnAssetGroup = function (inEvent, inAssetGroup) {
                    var newWeightValue = inEvent[0];
                    var difference = newWeightValue - inAssetGroup.weight;
                    if (difference > 0) {
                        var totalSpaceBelowMaxAvailabelForIncrease = 0;
                        for (var i = 0; i < inAssetGroup.assets.length; i++) {
                            if (!inAssetGroup.assets[i].locked) {
                                var spaceBelowMaxAvailabelForIncrease = inAssetGroup.assets[i].maxWeight - inAssetGroup.assets[i].weight;
                                totalSpaceBelowMaxAvailabelForIncrease = totalSpaceBelowMaxAvailabelForIncrease + spaceBelowMaxAvailabelForIncrease;
                            }
                        }
                        if (totalSpaceBelowMaxAvailabelForIncrease > 0) {
                            var increaseOveraAvailableSpaceRatio = difference / totalSpaceBelowMaxAvailabelForIncrease;
                            for (var i = 0; i < inAssetGroup.assets.length; i++) {
                                if (!inAssetGroup.assets[i].locked) {
                                    var spaceBelowMaxAvailabelForIncrease = inAssetGroup.assets[i].maxWeight - inAssetGroup.assets[i].weight;
                                    inAssetGroup.assets[i].weight = spaceBelowMaxAvailabelForIncrease * increaseOveraAvailableSpaceRatio + inAssetGroup.assets[i].weight;
                                    if (inAssetGroup.assets[i].weight > inAssetGroup.assets[i].maxWeight) {
                                        inAssetGroup.assets[i].weight = inAssetGroup.assets[i].maxWeight;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        var totalSpaceBelowMaxAvailabelForDecrease = 0;
                        for (var i = 0; i < inAssetGroup.assets.length; i++) {
                            if (!inAssetGroup.assets[i].locked) {
                                var spaceBelowMaxAvailabelForDecrease = inAssetGroup.assets[i].weight - inAssetGroup.assets[i].minWeight;
                                totalSpaceBelowMaxAvailabelForDecrease = totalSpaceBelowMaxAvailabelForDecrease + spaceBelowMaxAvailabelForDecrease;
                            }
                        }
                        if (totalSpaceBelowMaxAvailabelForDecrease > 0) {
                            var decreaseOveraAvailableSpaceRatio = difference / totalSpaceBelowMaxAvailabelForDecrease;
                            for (var i = 0; i < inAssetGroup.assets.length; i++) {
                                if (!inAssetGroup.assets[i].locked) {
                                    var spaceAboveMinAvailabelForDecrease = inAssetGroup.assets[i].weight - inAssetGroup.assets[i].minWeight;
                                    inAssetGroup.assets[i].weight = inAssetGroup.assets[i].weight + spaceAboveMinAvailabelForDecrease * decreaseOveraAvailableSpaceRatio;
                                    if (inAssetGroup.assets[i].weight < inAssetGroup.assets[i].minWeight) {
                                        inAssetGroup.assets[i].weight = inAssetGroup.assets[i].minWeight;
                                    }
                                }
                            }
                        }
                    }
                    var realNewWeightValue = 0; // considering that we may have adjusted the weights of the single assets based on their min&max, we need to recalculate te weight of the assetGroup
                    for (var i = 0; i < inAssetGroup.assets.length; i++) {
                        realNewWeightValue = realNewWeightValue + inAssetGroup.assets[i].weight;
                    }
                    inAssetGroup.weight = realNewWeightValue;
                    inAssetGroup.newValue = realNewWeightValue; // I need to simplify; if I change the value of the assetGroup I need to update the slider with no need of using newValue
                };
                SheetDetailComponent.prototype.onEndOnAsset = function (inEvent, inAsset) {
                    var newWeightValue = inEvent[0];
                    var change = newWeightValue - inAsset.weight;
                    if (change > 0) {
                        var totalSpaceAvailableForDecrease = 0;
                        var assetsOfGroup_1 = inAsset.assetGroup.assets;
                        for (var i = 0; i < assetsOfGroup_1.length; i++) {
                            if (!assetsOfGroup_1[i].locked && !(assetsOfGroup_1[i] == inAsset)) {
                                var spaceAboveMinAvailabelForDecrease = assetsOfGroup_1[i].weight - assetsOfGroup_1[i].minWeight;
                                totalSpaceAvailableForDecrease = totalSpaceAvailableForDecrease + spaceAboveMinAvailabelForDecrease;
                            }
                        }
                        console.log('total space 2 decrease --' + totalSpaceAvailableForDecrease);
                        var decreaseCorrectionFactor = 0;
                        if (totalSpaceAvailableForDecrease < change) {
                            decreaseCorrectionFactor = change - totalSpaceAvailableForDecrease;
                        }
                        console.log('decrease correction factor --' + decreaseCorrectionFactor);
                        var decreaseOveraAvailableSpaceRatio = (change - decreaseCorrectionFactor) / totalSpaceAvailableForDecrease;
                        console.log('decrease ratio --' + decreaseOveraAvailableSpaceRatio);
                        for (var i = 0; i < assetsOfGroup_1.length; i++) {
                            if (!assetsOfGroup_1[i].locked && !(assetsOfGroup_1[i] == inAsset)) {
                                var spaceAboveMinAvailabelForDecrease = assetsOfGroup_1[i].weight - assetsOfGroup_1[i].minWeight;
                                var variation = spaceAboveMinAvailabelForDecrease * decreaseOveraAvailableSpaceRatio;
                                assetsOfGroup_1[i].weight = assetsOfGroup_1[i].weight - variation;
                                console.log('asset weight ' + i + '--' + assetsOfGroup_1[i].weight);
                            }
                        }
                        inAsset.weight = inAsset.weight + change - decreaseCorrectionFactor;
                        console.log('asset changed weight --' + inAsset.weight);
                    }
                    else {
                        var totalSpaceAvailabelForIncrease = 0;
                        var assetsOfGroup_2 = inAsset.assetGroup.assets;
                        for (var i = 0; i < assetsOfGroup_2.length; i++) {
                            if (!assetsOfGroup_2[i].locked && !(assetsOfGroup_2[i] == inAsset)) {
                                var spaceBelowMaxAvailabelForIncrease = assetsOfGroup_2[i].maxWeight - assetsOfGroup_2[i].weight;
                                totalSpaceAvailabelForIncrease = totalSpaceAvailabelForIncrease + spaceBelowMaxAvailabelForIncrease;
                            }
                        }
                        console.log('total space 2 increase --' + totalSpaceAvailabelForIncrease);
                        var increaseCorrectionFactor = 0;
                        if (totalSpaceAvailabelForIncrease < -change) {
                            increaseCorrectionFactor = -change - totalSpaceAvailabelForIncrease;
                        }
                        console.log('increase correction factor --' + increaseCorrectionFactor);
                        var increaseOveraAvailableSpaceRatio = (change + increaseCorrectionFactor) / totalSpaceAvailabelForIncrease;
                        console.log('increase ratio --' + increaseOveraAvailableSpaceRatio);
                        for (var i = 0; i < assetsOfGroup_2.length; i++) {
                            if (!assetsOfGroup_2[i].locked && !(assetsOfGroup_2[i] == inAsset)) {
                                var spaceBelowMaxAvailabelForIncrease = assetsOfGroup_2[i].maxWeight - assetsOfGroup_2[i].weight;
                                var variation = spaceBelowMaxAvailabelForIncrease * increaseOveraAvailableSpaceRatio;
                                assetsOfGroup_2[i].weight = assetsOfGroup_2[i].weight - variation;
                                console.log('asset weight ' + i + '--' + assetsOfGroup_2[i].weight);
                            }
                        }
                        inAsset.weight = inAsset.weight + change + increaseCorrectionFactor;
                        console.log('asset changed weight --' + inAsset.weight);
                    }
                    var assetsOfGroup = inAsset.assetGroup.assets;
                    for (var i = 0; i < assetsOfGroup.length; i++) {
                        console.log(assetsOfGroup[i].weight);
                    }
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