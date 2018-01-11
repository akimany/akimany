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
    const pngsArray = keys.map(key => pngs.keys())
    const pngsArrayWithKeys = pngsArray.map((elem, index) => {
      let arr = []
      arr.push(index)
      arr.push(elem[index])
      return arr
    })
    console.log(pngsArrayWithKeys)

    return (
      <div className="col">
        {keys.map(elem => <img src={`${elem}`} />)}
        {preload.clients.map(elem => <Card clientList={elem} key={elem.id} />)}
      </div>
    )
  }
}

export default Project
