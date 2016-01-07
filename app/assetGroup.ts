import{AssetAbstract} from './assetAbstract';
import{Asset} from './asset';

export class AssetGroup extends AssetAbstract {
    public assets: Asset[];
    
    public constructor(inName: string, 
                        inWeight: number, 
                        inOneMonthRet: string, 
                        inOneYearRet: string, 
                        inAssets: Asset[], 
                        inMinWeigth: number, 
                        inMaxWeigth: number) {
        super(inName, inWeight, inOneMonthRet, inOneYearRet, 
                        inMinWeigth, inMaxWeigth);
        this.assets = inAssets;
   }
   
}