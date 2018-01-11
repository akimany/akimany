// it might be said:
import React, { Component } from 'react'

const style = {
  marginRight: '0'
}
class Logo extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <h1 className="navbar-brand mb-0" style={style}>
          Akimany
        </h1>
        <i className="material-icons md-48">face</i>
      </nav>
    )
  }
}

export default Logo
