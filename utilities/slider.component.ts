///<reference path="../typings/nouislider/nouislider.d.ts" />

import {Component, ViewChild, AfterViewInit, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-slider',
  template: `
    <div #sliderDomElement id="slider">
    </div>
  `,
})

export class Slider implements AfterViewInit { 
    @ViewChild('sliderDomElement') sliderDomElement;
    noUiSlider: any;
    @Input() start: number[];
    @Input() range: any;  //e.g. {'min': 0,'max': 100}
    @Input() pips: any; //e.g. {mode: 'values', values: [10, 20, 30, 40, 50, 60, 70, 80, 90], density: 10}
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
        this.noUiSlider.on('change', this.onEnd);
        //this.noUiSlider.on('tap', this.onEnd);
    }

}
