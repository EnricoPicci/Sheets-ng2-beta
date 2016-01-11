import{AssetAbstract} from './assetAbstract';
import{Asset} from './asset';
import{Sheet} from './sheet';

export class AssetGroup extends AssetAbstract {
    public assets: Asset[];
    public sheet: Sheet;
    
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
   
   setLocked(inLocked: boolean) {
       super.setLocked(inLocked);
       for (var i = 0; i < this.assets.length; i++) {
           this.assets[i].setLocked(inLocked);
       }
   }
   
   checkConsistency() {
       super.checkConsistency();
       for (var i = 0; i < this.assets.length; i++) {
           this.assets[i].checkConsistency();
       }
   }
   
}