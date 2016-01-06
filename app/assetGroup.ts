import{Asset} from './asset';

export class AssetGroup {
    public name: string;
    public weight: string;
    public oneMonthRet: string;
    public oneYearRet: string;
    public assets: Asset[];
    
    public show: boolean= true;
    
    public constructor(inName: string, inWeight: string, inOneMonthRet: string, inOneYearRet: string, inAssets: Asset[]) {
        this.name = inName;
        this.weight = inWeight;
        this.oneMonthRet = inOneMonthRet;
        this.oneYearRet = inOneYearRet;
        this.assets = inAssets;
    }
}