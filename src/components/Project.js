// it might be said:
import React, {Component} from 'react'
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
// import styled from 'styled-components'
import Card from './Card'
import preload from '../data/CurrentlyWorkingOn.json'

class Project extends Component {
  // it might be said:

  render() {
    return(
        <div className='col'>
          {preload.clients.map(elem => <Card clientList={elem} key={elem.id} />)}
        </div>
    )
  }
}

export default Project
