///<reference path="../typings/nouislider/nouislider.d.ts" />

import {Component, ViewChild, AfterViewInit, OnChanges, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-slider',
  template: `
    <div id="preSlider"></div>
    <div #sliderDomElement id="slider" [style.left]="getLeft()" [style.width]="getWidth()"></div>
    <div id="postSlider"></div>
  `,
})

export class Slider { 
    @ViewChild('sliderDomElement') sliderDomElement;
    noUiSlider: any;
    @Input() start: number[];
    @Input() range: any;  //e.g. {'min': 0,'max': 100}
    @Input() pips: any; //e.g. {mode: 'values', values: [10, 20, 30, 40, 50, 60, 70, 80, 90], density: 10}
    @Input() newValue: number;
    @Input() locked: boolean = false;
    @Output() end: EventEmitter<any> = new EventEmitter();
    public values: any[];
    
    public onEnd = (inValues: any[]) => {
        this.values = inValues;
        this.end.next(inValues);
    }
    
    ngAfterViewInit() {
        noUiSlider.create(this.sliderDomElement.nativeElement, 
          {start: this.start,
           tooltips: true,
           //connect: true,
           range: this.range,
           pips: this.pips
        });
        this.noUiSlider = this.sliderDomElement.nativeElement.noUiSlider;
        this.noUiSlider.on('change', this.onEnd); // register function onEnd() as callback for NoUiSlider
        //console.log('after view init ---' + this.start);
    }
    
    ngOnChanges() {
        if (this.noUiSlider != null) {
            if(this.newValue != null) {
                this.noUiSlider.set(this.newValue);
                console.log('on change new value ---' + this.newValue);
            }
            if (this.locked) {
                this.sliderDomElement.nativeElement.setAttribute('disabled', true);
            } else {
                this.sliderDomElement.nativeElement.removeAttribute('disabled');
            } 
        }
    }
    
    getLeft() {
        let ret = this.range.min + '%';
        //console.log('left:  ' + ret);
        return ret;
    }
    
    getWidth() {
        let ret = (this.range.max - this.range.min) + '%';
        //console.log('width:  ' + ret);
        return ret;
    }    
    
}
