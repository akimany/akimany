// it might be said:
import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu'
import TextField from 'material-ui/TextField'

import Heading1 from './components/generic/Headers'

const Message = styled.div`
  color: #ccc;
  font-style: italic;
`

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
})

// it might be said:
class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '...',
      lastName: '...',
      email: '...',
      message: '...',
      errorMessage: '...'
    }
  }

  _changeMessage(event) {
    switch (event.target.name) {
      case 'firstName':
        this.setState({
          firstName: event.target.value
        })
        break

      case 'lastName':
        this.setState({
          lastName: event.target.value
        })
        break

      case 'email':
        this.setState({
          email: event.target.value
        })
        break

      case 'message':
        this.setState({
          message: event.target.value
        })
        break

      default:
        this.setState({
          errorMessage: event.target.value
        })
    }
  }

  // it might be said:
  _handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    const { classes } = this.props
    return (
      <div className="row">
        <div className="col-12">
          <Heading1>ContactForm</Heading1>
        </div>
        <div className="col">
          <form onSubmit={this._handleSubmit}>
            <div className="form-group">
              <label>First Name</label>

              <TextField
                id="name"
                label="firstName"
                className={classes.textField}
                value={this.state.firstName}
                onChange={this._changeMessage.bind(this)}
                margin="normal"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this._changeMessage.bind(this)}
                name="lastName"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                onChange={this._changeMessage.bind(this)}
                name="email"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                onChange={this._changeMessage.bind(this)}
                name="message"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
        <div className="col">
          <Message>
            {/* it might be said: */}
            <p>A preview of your message:</p>
          </Message>
          <Message>First name: {this.state.firstName}</Message>
          <Message>Last name: {this.state.lastName}</Message>
          <Message>Email: {this.state.email}</Message>
          <Message>Message: {this.state.message}</Message>
        </div>
      </div>
    )
  }
}

export default ContactForm
