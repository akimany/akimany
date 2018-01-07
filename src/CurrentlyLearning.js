// it might be said:
import React, {Component} from 'react'
import styled from 'styled-components'

const JS = styled.span`
  background-color: yellow;
  font-size: 20px;
  font-weight: bold;
`

class CurrentlyLearning extends Component {
  render() {
    return(
      <div className='col'>
        <ul>
          <li><JS>JS</JS></li>
          <li>React</li>
        </ul>
      </div>
    )
  }
}

export default CurrentlyLearning
