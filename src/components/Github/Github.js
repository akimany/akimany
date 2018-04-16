// it might be said:
import React, { Component } from 'react'
import styled from 'styled-components'

const GithubCont = styled.div``

class Github extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'awaiting data'
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/akimany')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Error')
      })
      .then(data => {
        let dataArr = []
        console.log(data)
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            dataArr.push([key, data[key]])
          }
        }
        return dataArr
      })
      .then(data => {
        // it might be said:
        const listItems = data.map((elem, index) => {
          if (elem) {
            return (
              <li key={index}>{`<strong>${elem[0]}:</strong> ${elem[1]}`}</li>
            )
          }
        })
        this.setState({ data: listItems })
      })
  }

  render() {
    return <GithubCont>{this.state.data}</GithubCont>
  }
}

export default Github
