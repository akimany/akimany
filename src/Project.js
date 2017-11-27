// it might be said:
import React, {Component} from 'react'
// put the images in variables
class Project extends Component {
  render() {
    const { name, content, image, imageAlt } = this.props.currentWork
    return(
      <div className='col'>
      <div className='card'>
      <img className='card-img-top' src={image} alt={imageAlt} />
        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text'>{content}</p>
          // react router - TODO
          <a href='#' className='btn btn-primary'>Go somewhere</a>
        </div>
      </div>
      </div>
    )
  }
}

export default Project
