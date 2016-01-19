/// <reference path="../../typings/highcharts/highcharts.d.ts" />

declare var jQuery: any;

import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
    selector: '[ng2-highstocks]'
})
export class Ng2Highstocks {
    hostElement: ElementRef;
    chart: any;
    renderTo: any;
    constructor(ele: ElementRef) {
        this.hostElement = ele;
        this.renderTo = {
            chart: {
                renderTo: this.hostElement.nativeElement
            }
        };
    }

    @Input('ng2-highstocks') set options(opt: any) {
        if (!opt) {
            console.log('No valid options 1 ...');
            console.log(opt);
            return;
        }
        if (opt.series) {
            if (this.chart) {
                //this.chart.destroy();
            }
            //opt = Object.assign(opt, this.renderTo);
            //this.chart = new Highcharts.Chart(opt);
            let hostEl = this.hostElement;
            let nativeEl = hostEl.nativeElement;
            let jQ = jQuery(nativeEl);
            //this.chart = jQ.highcharts('StockChart', opt);
			//opt = Object.assign(opt, this.renderTo);
			//this.chart = new Highcharts.Chart('StockChart', opt);
            /*if (!opt.chart) {
                opt.chart = new Object();
            }
            opt.chart.renderTo = jQ;
            this.chart = new Highcharts.Chart('StockChart', opt);*/
            this.chart = jQ.highcharts('StockChart', opt);
        } else {
            console.log('No valid options...');
            console.dir(opt);
        }
    }
}
