import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Services extends Component {
  render() {
    let services = this.props.services.map(service => (
      <li>
        <Link to={`/services/${service.id}`}>{service.name}</Link>
      </li>
    ))
    return (
      <div>
        <h1>Services</h1>
        <ul>
          {services}
        </ul>
      </div>
    )
  }
}

export default Services