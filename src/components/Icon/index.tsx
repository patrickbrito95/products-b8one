import React from 'react'
import { IIcon } from './interface';


export const Icon = (props: IIcon) => {

	switch (props.name) {

		case "check": return (
			<svg width="16" height="11" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M20 6L9 17L4 12" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>

		);
		case "heartDefault": return (
			<svg width="24" height="21" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M23.1494 2.85655C22.5629 2.26797 21.8667 1.80107 21.1003 1.48251C20.334 1.16396 19.5126 1 18.6831 1C17.8535 1 17.0321 1.16396 16.2658 1.48251C15.4994 1.80107 14.8032 2.26797 14.2167 2.85655L12.9997 4.07749L11.7826 2.85655C10.5981 1.66822 8.99152 1.00062 7.31633 1.00062C5.64114 1.00062 4.03455 1.66822 2.85001 2.85655C1.66547 4.04489 1 5.65662 1 7.33718C1 9.01774 1.66547 10.6295 2.85001 11.8178L4.06705 13.0387L12.9997 22L21.9323 13.0387L23.1494 11.8178C23.7361 11.2295 24.2015 10.531 24.519 9.76219C24.8366 8.99339 25 8.16936 25 7.33718C25 6.50499 24.8366 5.68096 24.519 4.91216C24.2015 4.14336 23.7361 3.44486 23.1494 2.85655Z" fill="transparent" stroke={props.color || "#000000"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>

		);
		case "heartClicked": return (
			<svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M23.1494 2.85655C22.5629 2.26797 21.8667 1.80107 21.1003 1.48251C20.334 1.16396 19.5126 1 18.6831 1C17.8535 1 17.0321 1.16396 16.2658 1.48251C15.4994 1.80107 14.8032 2.26797 14.2167 2.85655L12.9997 4.07749L11.7826 2.85655C10.5981 1.66822 8.99152 1.00062 7.31633 1.00062C5.64114 1.00062 4.03455 1.66822 2.85001 2.85655C1.66547 4.04489 1 5.65662 1 7.33718C1 9.01774 1.66547 10.6295 2.85001 11.8178L4.06705 13.0387L12.9997 22L21.9323 13.0387L23.1494 11.8178C23.7361 11.2295 24.2015 10.531 24.519 9.76219C24.8366 8.99339 25 8.16936 25 7.33718C25 6.50499 24.8366 5.68096 24.519 4.91216C24.2015 4.14336 23.7361 3.44486 23.1494 2.85655Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>

		);

		default: return null
	}
}
export default Icon;