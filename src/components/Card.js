import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
// import { Link } from 'react-router-dom'
// It might be said:

class CardExampleWithAvatar extends Component {
  render() {
    const { name, content, image } = this.props.clientList
    return (
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="http://placehold.it/350x350"
        />
        <CardMedia
          overlay={
            <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
          }
        >
          <img src={image} alt="test" />
        </CardMedia>
        <CardTitle title={name} subtitle="Card subtitle" />
        <CardText>{content}</CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    )
  }
}

export default CardExampleWithAvatar
