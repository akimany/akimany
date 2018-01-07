import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Logo from './Logo'
import Project from './components/Project'
import Github from './components/Github/Github'
import CurrentlyLearning from './CurrentlyLearning'
import ContactForm from './ContactForm'
import About from './About'
// import PastWork from './PastWork'
// import HowIWork from './HowIWork'
// import LastUpdate from './LastUpdate'
// import hillside from './images/hillside.png'
// import aands from './images/a&s.png'

class App extends Component {

  render() {
    return (
      <Router>
      <div className='container'>
        <div className='row'>
          <Logo />
        </div>
        <div className='row'>
          <h1>CurrentlyWorkingOn</h1>
        </div>
        <div className='row'>
          <Project />
        </div>
        <div className='row'>
          <h1>CurrentlyLearning</h1>
        </div>
        <div className='row'>
          <CurrentlyLearning />
        </div>
          <Github />
          <About />
          <ContactForm />
        </div>
      </Router>

    );
  }
}

export default App;
