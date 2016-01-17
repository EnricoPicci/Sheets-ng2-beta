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

	// tags used as filter in search
	public general: string;
	public valueBased: string;
	public sector: string;

	public constructor(inId: number, inTitle: string, inLongTitle: string, inImageUrl: string,
                         inOneMonthReturn: string) {
		this.id = inId;
        this.title = inTitle;
		this.longTitle = inLongTitle;
		this.imageUrl = inImageUrl;
		this.oneMonthReturn= inOneMonthReturn
	}

}