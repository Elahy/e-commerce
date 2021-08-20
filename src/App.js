import "./App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Policy from "./components/Policy";
import Login from "./components/Login";
import { useHistory } from "react-router";
import { Menu, MenuItem } from "@material-ui/core";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontStyle: "inherit",
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const history = useHistory();
  const [cartitems] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlelogin = () => {
    history.push("/login");
  };
  const handleClick = () => {
    history.push("/");
  };
  const handleCart = () => {
    history.push("/cart");
  };

  return (
    <>
      <header className="App-header">
        <AppBar position="relative" color="transparent">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            >
              <MenuIcon
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleMenu}
              />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to={"/"}>
                Home
              </MenuItem>
              <MenuItem component={Link} to={"/products"}>
                Products
              </MenuItem>
              <MenuItem component={Link} to={"/sale"}>
                Sale!
              </MenuItem>
              <MenuItem component={Link} to={"/blog"}>
                Blog
              </MenuItem>
              <MenuItem component={Link} to={"/contact"}>
                Contact
              </MenuItem>
              <MenuItem component={Link} to={"/login"}>
                Login
              </MenuItem>
            </Menu>
            <img
              className="logo"
              src="../images/logo.png"
              alt="logo"
              onClick={handleClick}
            />

            <Link to="/products" className="headmenu">
              PRODUCTS
            </Link>
            <Link to="/sale" className="headmenu">
              SALE!
            </Link>
            <Link to="/blog" className="headmenu">
              BLOG
            </Link>
            <Link to="/contact" className="headmenu">
              CONTACT
            </Link>

            <img
              className="cartSign"
              src="../images/cart.png"
              alt="cartSign"
              onClick={handleCart}
            />
            <h3 className="cartItems">{cartitems}</h3>
            <button onClick={handlelogin} className="loginButton">
              Login
            </button>
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
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
