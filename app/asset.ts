import{AssetAbstract} from './assetAbstract';

export class Asset extends AssetAbstract {
    public symbol: string;

    public constructor(inName: string, 
                        inSymbol: string,
                        inWeight: number, 
                        inOneMonthRet: string, 
                        inOneYearRet: string, 
                        inMinWeigth: number, 
                        inMaxWeigth: number) {
        super(inName, inWeight, inOneMonthRet, inOneYearRet, 
                        inMinWeigth, inMaxWeigth);
        this.symbol = inSymbol;
    }
}