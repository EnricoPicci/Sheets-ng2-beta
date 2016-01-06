export class Asset {
    public name: string;
    public symbol: string;
    public weight: string;
    public oneMonthRet: string;
    public oneYearRet: string;
    
    public locked: boolean = false;
    
    public constructor(inName: string, inSymbol: string, inWeight: string, inOneMonthRet: string, inOneYearRet: string) {
        this.name = inName;
        this.symbol = inSymbol;
        this.weight = inWeight;
        this.oneMonthRet = inOneMonthRet;
        this.oneYearRet = inOneYearRet;
    }
}