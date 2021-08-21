import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import styles from "./ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setCartItem } from "../store/action";

const useStyles = makeStyles({
  card: {
    width: 300,
    margin: "1%",
  },
  media: {
    height: 400,
  },
  button: {
    color: "#a61458",
    borderColor: "#a61458",
    opacity: "0.8",
  },
  detailsButton: {
    backgroundColor: "#a61458",
  },
});

function ProductList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const reduxStore = useSelector((store) => store);
  const productList = reduxStore.productList;
  console.log(reduxStore.productList);
  const classes = useStyles();
  const buttonHanlder = (e) => {
    history.push(`/product/${e._id}`);
  };
  const cartHanlder = (e) => {
    dispatch(setCartItem(e));
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1} lg={1}></Grid>
        <Grid item xs={10} lg={10}>
          {productList.map((product, index) => (
            <div key={index} className={styles.productList}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                      Price: ${product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    onClick={() => cartHanlder(product)}
                  >
                    ADD TO CART
                  </Button>
                  <Button
                    onClick={() => buttonHanlder(product)}
                    className={classes.detailsButton}
                    variant="contained"
                    color="primary"
                  >
                    See Details
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductList;
