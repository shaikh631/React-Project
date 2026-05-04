import React from 'react'
import './Header.css'

function Header() {
	return (
		<header className="mb-header">
			<div className="mb-header__inner">
				<div className="mb-logo">MegaBlog</div>

				<nav className="mb-nav" aria-label="Main navigation">
					<a href="#" className="mb-nav__link">Home</a>
					<a href="#" className="mb-nav__link">Articles</a>
					<a href="#" className="mb-nav__link">About</a>
					<a href="#" className="mb-nav__link">Contact</a>
				</nav>

				<div className="mb-actions">
					<input className="mb-search" placeholder="Search..." aria-label="Search" />
					<button className="mb-btn">Sign In</button>
				</div>
			</div>
		</header>
	)
}

export default Header