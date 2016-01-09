export abstract class AssetAbstract {
    public name: string;
    public weight: number;
    public oneMonthRet: string;
    public oneYearRet: string;
    public minWeight: number;
    public maxWeight: number;
    public range: any;
    
    public show: boolean = true;
    public locked: boolean = false;
    
    public pips: any;
    
    public newValue: number;
    
    constructor(inName: string, 
                        inWeight: number, 
                        inOneMonthRet: string, 
                        inOneYearRet: string, 
                        inMinWeight: number, 
                        inMaxWeight: number) {
        this.name = inName;
        this.weight = inWeight;
        this.oneMonthRet = inOneMonthRet;
        this.oneYearRet = inOneYearRet;
        this.minWeight = inMinWeight;
        this.maxWeight = inMaxWeight;
        this.range = {'min': this.minWeight, 'max': this.maxWeight};
        this.pips = {mode: 'values',
                values: [inMinWeight, inMaxWeight],
				density: 10};
    }
    
   setLocked(inLocked: boolean) {
       this.locked = inLocked;
   }
   
}