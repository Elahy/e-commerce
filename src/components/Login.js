import { Grid, Paper, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useHistory } from "react-router";

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
  const history = useHistory();
  const [credential, setCredential] = useState({ email: "", password: "" });
  const user = {
    email: "admin@gmail.com",
    password: "admin123",
  };
  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      credential.email === user.email &&
      credential.password === user.password
    ) {
      history.push("/");
    } else {
      setError(true);
    }
    console.log(credential);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={false} lg={4}></Grid>
        <Grid item xs={12} lg={4}>
          <Paper className={classes.paper}>
            <form onSubmit={submitHandler} className={styles.card}>
              <h1>Login</h1>
              {error ? <p>Email or password didn't match!</p> : null}
              <TextField
                required
                id="outlined-required"
                label="Enter Email"
                type="email"
                variant="outlined"
                className={classes.field}
                onChange={(e) =>
                  setCredential(
                    { ...credential, email: e.target.value },
                    setError(false)
                  )
                }
                value={credential.email}
              />
              <br />
              <TextField
                required
                id="outlined-password-input"
                label="Enter Password"
                type="password"
                variant="outlined"
                className={classes.field}
                onChange={(e) =>
                  setCredential(
                    { ...credential, password: e.target.value },
                    setError(false)
                  )
                }
                value={credential.password}
              />
              <p>
                New user? Sign up <Link to="/signup">Here!</Link>
              </p>
              <br />
              <input
                type="submit"
                value="Login"
                className={styles.loginButton}
              ></input>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
