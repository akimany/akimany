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

    const pngsArrayWithKeys = pngsArray.map((elem, index) => {
      arr.push(elem)
      preload.clients.map(elem => {
        console.log(arr)
        if (elem.name === arr.image) {
          elem.push(arr.image)
        }
      })
      return arr
    })

    // it might be said:
    return (
      <div className="col">
        {preload.clients.map(elem => <Card clientList={elem} key={elem.id} />)}
      </div>
    )
  }
}

export default Project
