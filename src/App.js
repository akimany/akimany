import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiThemeProvider as V0MuiThemeProvider} from '@material-ui/core';

import Logo from './Logo'
import Project from './components/Project'
import Github from './components/Github/Github'
import CurrentlyLearning from './CurrentlyLearning'
import ContactForm from './ContactForm'
import About from './About'
// import PastWork from './PastWork'
// import HowIWork from './HowIWork'
// import LastUpdate from './LastUpdate'

class App extends Component {
  render() {
    return (
      <V0MuiThemeProvider>
        <Router>
          <div className="container">
            <div className="row">
              <Logo />
            </div>
            <div className="row">
              <h1>CurrentlyWorkingOn</h1>
            </div>
            <div className="row">
              <Project />
            </div>
            <div className="row">
              <h1>CurrentlyLearning</h1>
            </div>
            <div className="row">
              <CurrentlyLearning />
            </div>
            <Github />
            <About />
            <ContactForm classes="test" />
          </div>
        </Router>
      </V0MuiThemeProvider>
    )
  }
}

export default App
