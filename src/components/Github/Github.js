// it might be said:
import React, { Component } from 'react'
import styled from 'styled-components'

const GithubCont = styled.div`
  border: 1px solid red;
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
          return response.json()
        }
        throw new Error('Error')
      })
      .then((data) => {
        let dataArr = []
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            dataArr.push(data[key])
          }
        }
        return dataArr
      })
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
