export class Sheet { 
	public id: number;
    public title: string;
	public longTitle: string;
	public imageUrl: string;
	public description: string;
	public oneMonthReturn: string;

	// tags used as filter in search
	public general: string;
	public valueBased: string;
	public sector: string;

	public constructor(inId: number, inTitle: string, inLongTitle: string, inImageUrl: string, inOneMonthReturn: string) {
		this.id = inId;
        this.title = inTitle;
		this.longTitle = inLongTitle;
		this.imageUrl = inImageUrl;
		this.oneMonthReturn= inOneMonthReturn
	}

	public setDescription(inDescription: string) {
		this.description = inDescription;
	}

}