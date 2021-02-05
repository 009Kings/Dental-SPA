import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<Link to="/">Go to Home Page</Link>{' | '}
					<Link to="/services">See Our Services</Link>{' | '}
					<Link to="/contact">Contact Us!</Link>
				</nav>
			</header>
		)
	}
}

export default Header