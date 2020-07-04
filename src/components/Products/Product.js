import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { CardContent, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 250,
  },
});

export default function Product(props) {
  const { id, title, price } = props;
  const url = props.image;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} title={title} />
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="secondary">
          <Link to={`/productdetails/${id}`}>Details</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
