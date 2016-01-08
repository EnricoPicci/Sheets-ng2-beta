///<reference path="../typings/nouislider/nouislider.d.ts" />
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Slider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Slider = (function () {
                function Slider() {
                    var _this = this;
                    this.locked = false;
                    this.end = new core_1.EventEmitter();
                    this.onEnd = function (inValues) {
                        _this.values = inValues;
                        _this.end.next(inValues);
                    };
                }
                Slider.prototype.ngAfterViewInit = function () {
                    noUiSlider.create(this.sliderDomElement.nativeElement, { start: this.start,
                        tooltips: true,
                        //connect: true,
                        range: this.range,
                        pips: this.pips
                    });
                    this.noUiSlider = this.sliderDomElement.nativeElement.noUiSlider;
                    this.noUiSlider.on('change', this.onEnd);
                    //this.noUiSlider.on('tap', this.onEnd);
                };
                Slider.prototype.ngOnChanges = function () {
                    if (this.noUiSlider != null) {
                        if (this.newValue != null) {
                            this.noUiSlider.set(this.newValue);
                        }
                        if (this.locked) {
                            this.sliderDomElement.nativeElement.setAttribute('disabled', true);
                        }
                        else {
                            this.sliderDomElement.nativeElement.removeAttribute('disabled');
                        }
                    }
                    console.log(this.locked);
                };
                __decorate([
                    core_1.ViewChild('sliderDomElement'), 
                    __metadata('design:type', Object)
                ], Slider.prototype, "sliderDomElement", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Slider.prototype, "start", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Slider.prototype, "range", void 0);
                __decorate([
                    //e.g. {'min': 0,'max': 100}
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Slider.prototype, "pips", void 0);
                __decorate([
                    //e.g. {mode: 'values', values: [10, 20, 30, 40, 50, 60, 70, 80, 90], density: 10}
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Slider.prototype, "newValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], Slider.prototype, "locked", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Slider.prototype, "end", void 0);
                Slider = __decorate([
                    core_1.Component({
                        selector: 'my-slider',
                        template: "\n    <div #sliderDomElement id=\"slider\">\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], Slider);
                return Slider;
            })();
            exports_1("Slider", Slider);
        }
    }
});
//# sourceMappingURL=slider.component.js.map