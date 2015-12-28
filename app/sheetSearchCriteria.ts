import {SheetService} from '../app/sheetService';
import {SheetFactory} from '../app/sheetFactory';
import {SearchSelection} from '../app/searchSelection';


export class SheetSearchCriteria { 
	public freeSearchText: string;
	public general: SearchSelection[];
	public valueBased: SearchSelection[];
	public sectors: SearchSelection[];
	
	static generalDomain: string[];
	static valueBasedDomain: string[];
	static sectorsDomain: string[];

	sheetService: SheetService;

	constructor(inSheetService: SheetFactory) {
		this.sheetService = inSheetService;
	}
	
	public getGeneralDomain() {
		if (SheetSearchCriteria.generalDomain == null) {
			SheetSearchCriteria.generalDomain = this.sheetService.getGeneralSearchCriteriaDomain();
		}
		if (this.general == null) {
			this.general = new Array<SearchSelection>();
			for (var i = 0; i < SheetSearchCriteria.generalDomain.length; i++) {
				this.general[i] = new SearchSelection(SheetSearchCriteria.generalDomain[i]);
			}
		}
		return this.general;
	}
	
	public getValueBasedDomain() {
		if (SheetSearchCriteria.valueBasedDomain == null) {
			SheetSearchCriteria.valueBasedDomain = this.sheetService.getValueBasedSearchCriteriaDomain();
		}
		if (this.valueBased == null) {
			this.valueBased = new Array<SearchSelection>();
			for (var i = 0; i < SheetSearchCriteria.valueBasedDomain.length; i++) {
				this.valueBased[i] = new SearchSelection(SheetSearchCriteria.valueBasedDomain[i]);
				//console.log(this.valueBased[i]);
			}
		}
		return this.valueBased;
	}
	
	public getSectorsDomain() {
		if (SheetSearchCriteria.sectorsDomain == null) {
			SheetSearchCriteria.sectorsDomain = this.sheetService.getSectorsSearchCriteriaDomain();
		}
		if (this.sectors == null) {
			this.sectors = new Array<SearchSelection>();
			for (var i = 0; i < SheetSearchCriteria.sectorsDomain.length; i++) {
				this.sectors[i] = new SearchSelection(SheetSearchCriteria.sectorsDomain[i]);
				//console.log(this.sectors[i]);
			}
		}
		return this.sectors;
	}

}