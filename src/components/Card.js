import React, { Component } from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import { withStyles } from 'material-ui/styles'
import {
  Card,
  CardActions,
  CardMedia,
  CardContent
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';


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
              <Typography
                title={`A screenshot from the ${name} project`}
                subtitle=""
              />
            }
          >
            <img src={image} alt={content} />
          </CardMedia>
          <Typography title={name} gutterBottom variant="h5" component="h2" />
          <CardContent>{content}</CardContent>
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
