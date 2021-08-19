import { Grid, Paper, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import styles from "./Login.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "70vh",
    marginTop: "10%",
  },
  field: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Login() {
  const classes = useStyles();

  const submitHandler = () => {
    alert("logged");
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={false} lg={4}></Grid>
        <Grid item xs={12} lg={4}>
          <Paper className={classes.paper}>
            <form onSubmit={submitHandler} className={styles.card}>
              <h1>Login</h1>
              <TextField
                required
                id="outlined-required"
                label="Enter Email"
                type="email"
                variant="outlined"
                className={classes.field}
              />
              <br />
              <TextField
                required
                id="outlined-password-input"
                label="Enter Password"
                type="password"
                variant="outlined"
                className={classes.field}
              />
              <br />
              <input type="submit" value="Login"></input>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
