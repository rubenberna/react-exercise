import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function PhotosList(props) {

  const {classes, photos} = props

  return (
    photos.map(photo => 
      <div>


          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={photo.url}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {photo.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link key={photo.id}
                to={`/photo/${photo.id}`} >
              <Button size="small" color="primary">
                Share
                </Button>
              </Link>
              <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
          </Card>

       
      </div>
      
    )
  )
}

export default withStyles(styles)(PhotosList);