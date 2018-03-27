// it might be said:
import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Card from './Card'
import preload from '../data/CurrentlyWorkingOn.json'

class Project extends Component {
  // it might be said:

  render() {
    const pngs = require.context('../images', true, /\.png$/)
    const keys = pngs.keys()
    const pngsArray = keys.map(key => pngs(key))
    let arr = []

    const smooshJson = preload.clients.map((company, index) => {
      if (
        company.name.toLowerCase() ===
        pngsArray[index].split('.')[0].split('/')[3]
      ) {
        company['image'] = pngsArray[index]
      }
      return company
    })

    // it might be said:
    return (
      <div className="col test">
        {smooshJson.map(elem => <Card clientList={elem} key={elem.id} />)}
      </div>
    )
  }
}

export default Project
