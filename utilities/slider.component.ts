///<reference path="../typings/nouislider/nouislider.d.ts" />

import {Component, ViewChild, AfterViewInit, OnChanges, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'my-slider',
  template: `
    <div #sliderDomElement id="slider">
    </div>
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
        //this.noUiSlider.set(this.newValue);
        /*console.log('on end new value ---' + this.newValue);
        if (this.noUiSlider != null) {
            //console.log(this.noUiSlider.get());
            if (this.newValue != this.noUiSlider.get()) {
                console.log('on end - get ---' + this.noUiSlider.get());
                console.log('on end - new value ---' + this.newValue);
                this.noUiSlider.set(this.newValue);
            }
        }*/
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
        //this.noUiSlider.on('tap', this.onEnd);
        console.log('after view init ---' + this.start);
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
        //console.log('changes ---' + this.start);
    }
    
    /*ngAfterContentInit() {
        //console.log('content checked ---' + this.start);
        if (this.noUiSlider != null) {
            //console.log(this.noUiSlider.get());
            if (this.newValue != this.noUiSlider.get()) {
                console.log('after content cheched - get ---' + this.noUiSlider.get());
                console.log('after content cheched - new value ---' + this.newValue);
            }
        }
    }*/
    
    /*ngOnInit() {
        console.log('init ---' + this.start);
    }
    
    ngAfterContentInit() {
        console.log('content init ---' + this.start);
    }
    
    ngAfterContentChecked() {
        console.log('content checked ---' + this.start);
    }
    
    ngAfterViewChecked() {
        console.log('view checked ---' + this.start);
    }*/

}
