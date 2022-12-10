import React from 'react';
import Icon from '../Icon/index.tsx';
import { IButton } from './interface';
import './style.css';

export const Button = (props: IButton) => {
	return (
		props.isClicked ? (

			<button className="buttonClicked" onClick={props.onClick}>
				<div className="wrapperIcon">
					<Icon name="check" />
				</div>
				{props.label}
			</button>
		) :
			(
				<button className="buttonDefault" onClick={props.onClick}>
					{props.label}
				</button>
			)
	)
}

export default Button;