import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import Header from './components/partials/Header'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Service from './components/pages/Service'

import serviceDetails from './data/service-details'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/services" render={() => <Services services={serviceDetails} />} />
          <Route path='/services/:id' render={(props) => {
						const service = serviceDetails.find(service => service.id.toString() === props.match.params.id)
						props = {...props, ...service}
						return <Service {...props} />
					}} />
          <Route path="/contact" component={Contact} />
        </main>
      </Router>
    )
  }
}

export default App