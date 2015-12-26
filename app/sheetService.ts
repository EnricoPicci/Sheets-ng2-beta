import {Sheet} from '../app/Sheet';

export interface SheetService {
	getSheet(inId: string) : Sheet;
	getSomeSheets(inFromPosition: number, inMaxNumebrOfSheets: number) : Sheet[];
	
	getGeneralSearchCriteriaDomain() : string[];
	getValueBasedSearchCriteriaDomain() : string[];
	getSectorsSearchCriteriaDomain() : string[];
	
	fetchSheets(searchString: string, generalTags: string[], valueBasedTags: string[], sectorsTags: string[]) : Array<Sheet>;
	
}