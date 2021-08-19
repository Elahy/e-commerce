import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Policy from "./components/Policy";
import Login from "./components/Login";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textDecoration: "none",
    fontStyle: "inherit",
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const history = useHistory();
  const handlelogin = () => {
    history.push("/login");
  };
  return (
    <>
      <header className="App-header">
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <img className="logo" src="../images/logo.png" alt="logo" />

            <Typography variant="h6" className={classes.title}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Sale!</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Contact</Link>
            </Typography>
            <Button onClick={handlelogin} variant="contained" color="primary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/PrivacyPolicy">
            <Policy />
          </Route>
        </Switch>
      </main>
      <footer>
        <div className="bottom-details">
          <span className="copyright_text">Copyright © 2021 Ecommerce.</span>
          <span className="policy_terms">
            <Link to="/PrivacyPolicy" className="privacy">
              Privacy policy
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
