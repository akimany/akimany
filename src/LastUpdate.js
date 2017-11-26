// it might be said:
import React, {Component} from 'react'

class LastUpdate extends Component {
  render() {
    const today = new Date()
    return(
      <h1>Last Updated: {today.getFullYear()}</h1>
    )
  }
}

export default LastUpdate
