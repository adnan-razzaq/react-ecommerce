import React from "react";
import Product from "./Product";
import { Typography, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: { textAlign: "center" },
  box: {
    margin: "20px",
  },
});

export default function ProductList({ title, products }) {
  const classes = useStyles();
  const product = products.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return (
    <Paper>
      <Typography className={classes.root} variant="h2">
        {title}
      </Typography>
      <Grid className={classes.box} container justify="space-between">
        {product}
      </Grid>
    </Paper>
  );
}
