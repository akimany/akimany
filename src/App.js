import React, { Component } from 'react';
import Logo from './Logo'
import Project from './Project'
import CurrentlyLearning from './CurrentlyLearning'
import ContactForm from './ContactForm'
import About from './About'
import PastWork from './PastWork'
import HowIWork from './HowIWork'
import TechStack from './TechStack'
import LastUpdate from './LastUpdate'
import hillside from './images/hillside.png'
import aands from './images/a&s.png'

class App extends Component {
  // it might be said:
_CurrentlyWorkingOn() {
  let arrCurrentlyWorkingOn = [{
      "id": "1",
      "name": "Hillside",
      "type": "Charity",
      "size": "10+",
      "content": "A single page website with embedded form, built for Hillside tuition",
      "image": hillside,
      "imageAlt": "Hillside charity",
      "tech": "html, css, js, Bootstrap"
  },
  {
    "id": "2",
    "name": "A&S",
    "type": "Business",
    "size": "-",
    "content": "A worpress site, built for an import/export company in France",
    "image": aands,
    "imageAlt": "A site for a new business in France",
    "tech": "Worpress, html, css"
  },
]

return arrCurrentlyWorkingOn.map(elem => <Project currentWork={elem} key={elem.id} />)
}

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Logo />
        </div>
        <div className='row'>
          <h1>CurrentlyWorkingOn</h1>
        </div>
        <div className='row'>
          {this._CurrentlyWorkingOn()}
        </div>
        <div className='row'>
          <h1>CurrentlyLearning</h1>
        </div>
        <div className='row'>
          <CurrentlyLearning />
        </div>
          <About />
          <PastWork />
          <HowIWork />
          <TechStack />
          <LastUpdate />
          <ContactForm />
        </div>
    );
  }
}

export default App;
