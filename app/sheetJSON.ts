import{Sheet} from './sheet';

export class SheetJSON { 
        public id: number;
        public title: string;
        public longTitle: string;
        public imageUrl: string;
        public createdBy: string;
        public description: string;
        public oneYearReturn: string;
        public oneMonthReturn: string;
        public dailyChange: string;
        
        public benchmark: string;
        
        public valueAtRisk: number;
        public volatility: number;

        // tags used as filter in search
        public general: string;
        public valueBased: string;
        public sector: string;
        
        fill(inSheet: Sheet) {
            this.id = inSheet.id;
            this.title = inSheet.title;
            this.longTitle = inSheet.longTitle ;
            this.imageUrl = inSheet.imageUrl;
            this.createdBy = inSheet.createdBy;
            this.description = inSheet.description;
            this.oneYearReturn = inSheet.oneYearReturn;
            this.oneMonthReturn = inSheet.oneMonthReturn;
            this.dailyChange = inSheet.dailyChange;
            
            this.benchmark = inSheet.benchmark;
            
            this.valueAtRisk = inSheet.valueAtRisk;
            this.volatility = inSheet.volatility;

            // tags used as filter in search
            this.general = inSheet.general;
            this.valueBased = inSheet.valueBased;
            this.sector = inSheet.sector;        
    }
}