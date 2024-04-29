import React from 'react';
import Home from '../Components/Home';
import './HomePage.css';

const HomePage: React.FC = () => {
	return (
		<div className="client-home-page">
			<header>
				<h1>Dashboard</h1>
			</header>
			<Home />
			<footer>
				<p>© 2024 Axam. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default HomePage;
