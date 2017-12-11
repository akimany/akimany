// it might be said:
import React, { Component } from 'react'
import styled from 'styled-components'

const GithubCont = styled.div`
  border: 5px solid red;
`

class Github extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'awaiting data'
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/akimany')
      .then((response) => {
        if(response.ok) {
          console.log(response);
          return response.json()
        }
        throw new Error('Error')
      })
      .then(data => {
        console.log(typeof data);
        return JSON.stringify(data)
      }
      )
      .then(data => {
        this.setState({data})
      })
  }

  render() {
      return(
          <GithubCont>{this.state.data}</GithubCont>
      )
  }
}

export default Github
