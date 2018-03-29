import React, { Component } from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import { withStyles } from 'material-ui/styles'
import {
  Card,
  CardActions,
  //CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
//import FlatButton from 'material-ui/FlatButton'
// import { Link } from 'react-router-dom'
// It might be said:

class CardExampleWithAvatar extends Component {
  render() {
    const { name, content, image } = this.props.clientList
    return (
      <div className="col">
        <Card>
          {/*<CardHeader title="URL Avatar" subtitle="Subtitle" avatar={image} />*/}
          <CardMedia
            overlay={
              <CardTitle
                title={`A screenshot from the ${name} project`}
                subtitle=""
              />
            }
          >
            <img src={image} alt={content} />
          </CardMedia>
          <CardTitle title={name} />
          <CardText>{content}</CardText>
          <CardActions>
            {/*<FlatButton label="Action1" />
          <FlatButton label="Action2" /> */}
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CardExampleWithAvatar
