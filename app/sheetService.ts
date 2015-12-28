import {Sheet} from './sheet';

export interface SheetService {
	getSheet(inId: number) : Sheet;
	getSomeSheets(inFromPosition: number, inMaxNumebrOfSheets: number) : Sheet[];
	
	getGeneralSearchCriteriaDomain() : string[];
	getValueBasedSearchCriteriaDomain() : string[];
	getSectorsSearchCriteriaDomain() : string[];
	
	fetchSheets(searchString: string, generalTags: string[], valueBasedTags: string[], sectorsTags: string[]) : Array<Sheet>;
	
}