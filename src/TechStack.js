// it might be said:
import React, {Component} from 'react'

class TechStack extends Component {

constructor() {
  super()
  this.state = {
    core: 'html, css and js',
    js: 'es6',
    framework: 'react',
    deployment: ''
  }
}

  render() {
    return(
      <div>
        <p>This site is built with {this.state.core}, using {this.state.js} with {this.state.framework} </p>
      </div>

    )
  }
}

export default TechStack
