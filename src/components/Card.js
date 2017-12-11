import React, { Component } from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

class Card extends Component {
  render() {
    return (
      <div className='card'>
        <Image className='card-img-top' src={this.props.clientList.image} />
        <div className='card-body'>
          <h4 className='card-title'>{this.props.clientList.name}</h4>
          <p className='card-text'>{this.props.clientList.content}</p>
          <a className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default Card
