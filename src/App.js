import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Logo from './Logo'
import Project from './components/Project'
import Github from './components/Github/Github'
import CurrentlyLearning from './CurrentlyLearning'
import ContactForm from './ContactForm'
import About from './About'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
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
      </MuiThemeProvider>
    )
  }
}

export default App
