import React, { useState } from 'react';
import Icon from '../Icon/index.tsx';
import './style.css'

export const Wishlist = () => {

	const [isHover, setIsHover] = useState(false)
	const [clicked, setClicked] = useState(false)

	return (
		!clicked ? (
			isHover ? (
				<button onClick={() => { setClicked(!clicked) }} className='wishlistHovered' onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}>
					<Icon name="heartDefault" color="#F3151B" />
				</button>
			) : (
				<button onClick={() => setClicked(!clicked)} className='wishlistDefault' onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}>
					<Icon name="heartDefault" />
				</button>
			)
		) : (
			<button onClick={() => setClicked(!clicked)} className='wishlistClicked' onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}>
				<Icon name="heartClicked" />
			</button>
		)
	)
}

export default Wishlist;