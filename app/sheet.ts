import {EventEmitter} from 'angular2/core';

import{AssetGroup} from './assetGroup';
import{Asset} from './asset';

import {SheetBackEnd} from './sheetBackEnd.service';

import {ReturnPeriod} from './returnPeriod';
import {ReturnData} from './returnData';

export class Sheet { 
	public id: number;
    public title: string;
	public longTitle: string;
	public imageUrl: string;
    public createdBy: string;
	public description: string;
	public oneYearReturn: string;
    public oneMonthReturn: string;
    public dailyChange: string;
    public assetGroups: AssetGroup[];
    
    public benchmark: string;
    public returnDataLastMonth: ReturnData = new ReturnData();
    public returnDataLastYear: ReturnData = new ReturnData();
    public returnDataAll: ReturnData = new ReturnData();
    public returnDataBenchmarkLastMonth: ReturnData = new ReturnData();
    public returnDataBenchmarkLastYear: ReturnData = new ReturnData();
    public returnDataBenchmarkAll: ReturnData = new ReturnData();
    
    public valueAtRisk: number;
    public volatility: number;

	// tags used as filter in search
	public general: string;
	public valueBased: string;
	public sector: string;
    
    // add en EventEmmiter to communicate when sheet composition changes to all components that may be interested
    private _changeCompositionEventEmitter: EventEmitter<Sheet> = new EventEmitter();
    
    // variable to store states that I use to drive the view as far as comparison functionalities are required
    public isSelectedForComparison: boolean = false;
    public isComparisonCheckboxToBeDisplayed: boolean = false;

	public constructor(inId: number, 
                        inTitle: string, 
                        inLongTitle: string, 
                        inImageUrl: string,
                        inOneMonthReturn: string, 
                        inValueAtRisk: number, 
                        inVolatility: number,
                        inGeneral: string, 
                        inValueBased: string, 
                        inSector: string) {
        this.id = inId;
        this.title = inTitle;
        this.longTitle = inLongTitle;
        this.imageUrl = inImageUrl;
        this.oneMonthReturn = inOneMonthReturn;
        this.valueAtRisk = inValueAtRisk;
        this.volatility = inVolatility;
        this.general = inGeneral;
        this.valueBased = inValueBased;
        this.sector = inSector;
	}
    
    emitChangeCompositionEvent() {
        this._changeCompositionEventEmitter.emit(this);
    }
    getChangeCompositionEvent() {
        return this._changeCompositionEventEmitter;
    }

}