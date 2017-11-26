// it might be said:
import React, {Component} from 'react'
// put the images in variables
class Project extends Component {
  render() {
    const { name, content, image, tech} = this.props.currentWork
    return(
      <div className='col'>
        <div className='media'>
          <img className='mr-3 img-responsive' src={`/public/images/${image}`} alt='placeholder' />
          <div className='media-body'>
            <h5 className='mt-0'>{name}</h5>
            {content} using {tech}.
          </div>
        </div>
      </div>
    )
  }
}

export default Project
