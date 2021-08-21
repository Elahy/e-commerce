import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";
// import { Link } from "react-router-dom";

function ProductDetails() {
  const id = useParams();
  const { productList } = useSelector((store) => store);
  const history = useHistory();
  const product = productList[id.id - 1];
  const useStyles = makeStyles({
    root: {
      height: "90vh",
      flexGrow: 1,
    },
    img: {
      margin: "5%",
      maxWidth: "90%",
      borderRadius: "10px",
    },
    body: {
      paddingTop: "10%",
      margin: "5%",
      maxWidth: "90%",
      minHeight: "90%",
      border: "1px solid white",
      borderRadius: "10px",
      textAlign: "center",
      position: "relative",
    },
    buttton: {
      color: "#04b4c4",
      borderColor: "#04b4c4",
      margin: "2% 4%",
      position: "relative",
      left: "38%",
    },
    buttton1: {
      backgroundColor: "#04b4c4",
      margin: "2% 4%",
      position: "relative",
      left: "38%",
    },
  });
  const classes = useStyles();

  const buttonHandler = () => {
    history.push("/products");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1} lg={2}></Grid>
        <Grid item xs={10} lg={4}>
          <img
            alt={product.title}
            src={product.image}
            title={product.title}
            className={classes.img}
          />
        </Grid>
        <Grid item xs={10} lg={4}>
          <div className={classes.body}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {product.description}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Type: {product.category}
            </Typography>
            <Typography variant="h5" color="textPrimary" component="p">
              Price: {product.price}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1} lg={2}></Grid>
        <Button
          size="medium"
          className={classes.buttton}
          variant="outlined"
          color="primary"
        >
          Add to cart
        </Button>
        <Button
          onClick={buttonHandler}
          className={classes.buttton}
          size="medium"
          variant="outlined"
          color="primary"
        >
          Go Back
        </Button>
      </Grid>
    </div>
  );
}

export default ProductDetails;
