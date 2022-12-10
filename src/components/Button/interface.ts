export interface IButton {
	onClick: () => void;
	label: string;
	isClicked: boolean;
	children: any;
}