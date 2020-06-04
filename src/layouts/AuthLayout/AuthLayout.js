import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

import classes from "./Authlayout.module.scss";
import { SIGNUP, LOGIN } from "../../constants/url";
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[600]),
    backgroundColor: purple[600],
    "&:hover": {
      backgroundColor: purple[700],
    },
    padding: "10px 20px",
    borderRadius: "25px",
    fontSize: "20px",
    boxShadow: "5px 5px 25px -8px rgba(164, 55, 226, 0.8)",
  },
}))(Button);

export const AuthLayout = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        <div className={classes.authHeader}>
          <div className={classes.loginButton}>
            <Link to={LOGIN}>
              <ColorButton variant="contained"> Login</ColorButton>
            </Link>
          </div>
        </div>
        <div className={classes.circles}>
          <span className={classes.circles1}></span>
          <span className={classes.circles2}></span>
          <span className={classes.circles3}></span>
        </div>
      </div>
      <div>{props.children}</div>
      <div className={classes.panel}>
        <div className={classes.circles}>
          <span className={classes.circles3}></span>
          <span className={classes.circles2}></span>
          <span className={classes.circles1}></span>
        </div>
        <div className={classes.authHeader}>
          <div className={classes.signUpButton}>
            <Link to={SIGNUP}>
              <ColorButton variant="contained">Sign up</ColorButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
