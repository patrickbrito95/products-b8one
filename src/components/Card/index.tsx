import React, { useState } from 'react';
import Button from '../Button/index.tsx'
import Wishlist from '../WishlistButton/index.tsx';
import { ICard } from './interface';
import './style.css'


export const Card = (props: ICard) => {
	const [clicked, setClicked] = useState(false);


	const normalizeNumbers = (value) => {
		return value.toFixed(2).toString().replace('.', ',')
	}


	return (
		<div className='wrapperCard'>
			<div className='wishlistButton'>
				<Wishlist />
			</div>
			<div className='wrapperImage'>
				<img src={props.image} width="100%" height="240px" />

			</div>
			<span className='nameProduct'>{props.productName}</span>
			<div className="wrapperOffer">
				<span className="oldPrice">R$ {normalizeNumbers(props.oldPrice)}</span>
				<span className="currentPrice">R$ {normalizeNumbers(props.currentPrice)}</span>
				<div className='quotes'>

					<span>em até</span><span style={{ color: "#1C1C1C", marginLeft: "2px", marginRight: "2px" }}>{props.dividedBy}x de R$ {normalizeNumbers(props.value / props.dividedBy)}</span><span>sem juros</span>
				</div>
			</div>
			<Button isClicked={clicked} onClick={props.onClick} label={clicked ? "ADICIONADO" : "ADICIONAR"} onClick={() => setClicked(!clicked)} />
		</div >
	)
}

export default Card;