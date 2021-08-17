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
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setCurrentProduct } from "../store/action";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "1%",
  },
  media: {
    height: 400,
  },
  button: {
    marginLeft: "15%",
    marginRight: "15%",
    color: "#04b4c4",
    borderColor: "#04b4c4",
  },
  detailsButton: {
    backgroundColor: "#04b4c4",
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
    console.log(e, "===event");
    dispatch(setCurrentProduct(e));
    history.push(`/product/${e}`);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={1} lg={1}></Grid>
        <Grid item xs={10} lg={10}>
          {productList.map((product, index) => (
            <div key={index} className="productList">
              <Card className={classes.root}>
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
                  >
                    Share
                  </Button>
                  <Button
                    onClick={() => buttonHanlder(product.id)}
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
