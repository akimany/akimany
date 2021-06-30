// it might be said:
import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Card from './Card'
import preload from '../data/CurrentlyWorkingOn.json'

class Project extends Component {
  render() {
    const pngs = require.context('../images', true, /\.png$/)
    const keys = pngs.keys()
    const pngsArray = keys.map(key => pngs(key))

    const smooshJson = preload.clients.map((company, index) => {
      if (
        company.name.toLowerCase() ===
        pngsArray[index].split('.')[0].split('/')[3]
      ) {
        company['image'] = pngsArray[index]
      }
      return company
    })

    return smooshJson.map(elem => <Card clientList={elem} key={elem.id} />)
  }
}

export default Project
