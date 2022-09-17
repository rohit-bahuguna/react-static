import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className="navbar">
			<Link to="#">Indicator Strategies</Link>
			<Link to="#">Candlestick patterns</Link>
			<Link to="#">Crypto Strategies</Link>
			<Link to="#">Social Trading (Coming soon..)</Link>
		</div>
	);
};

export default NavBar;
