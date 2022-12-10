export interface ICard {
	dividedBy: number;
	value: number;
	currentPrice: number;
	oldPrice: number;
	productName: string;
	image: string;
	onClick: () => void;
}