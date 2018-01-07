import React, { Component } from 'react'
import Image from './Image'
import {hillside} from '../images/hillside.png'
import {aands} from '../images/a&s.png'
// import { Link } from 'react-router-dom'
{/* It might be said: */}
class Card extends Component {
  render() {
    const clientImages = [hillside, aands]
    const {name, content, image} = this.props.clientList
    return (
      <div className='card'>
      {
        clientImages.map((elem, index) => {
          return <Image className='card-img-top' src={elem} />
        })
      }
        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text'>{content}</p>
          <a className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default Card
