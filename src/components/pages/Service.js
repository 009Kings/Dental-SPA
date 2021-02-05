import React, { Component } from 'react'

class Service extends Component {
	render() {
		if (!this.props.name) return <h3>That is not a service we have yet!</h3>
		return (
			<div>
				<h3>{this.props.name}</h3>
				<h6>${this.props.price}</h6>
				<p>{this.props.description}</p>
			</div>
		)
	}
}

export default Service