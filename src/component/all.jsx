import React, { Component } from 'react'

import { BrowserRouter as Router} from "react-router-dom"
import Header from './header/header';
import Recent from './recentcard/recent.jsx'
import Hero from './hero/hero.jsx'



export class all extends Component {
  render() {
    return (
      <>
        <Router>
        <Header/>
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Switch> */}
        
      <Hero/>
      <Recent/>
        </Router>
      </>
    )
  }
}

export default all