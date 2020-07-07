import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

import classes from "./Authlayout.module.scss";
import { SIGNUP, LOGIN } from "../../constants/url";

import { motion } from "framer-motion";

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

const ballsVariants = {
  animation: {
    y: [0, -10],
    x: 0,
  },
};

export const AuthLayout = (props) => {
  const location = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        <div className={classes.authHeader}>
          <div className={classes.loginButton}>
            {location.pathname !== LOGIN ? (
              <Link to={LOGIN}>
                <ColorButton variant="contained">Login</ColorButton>
              </Link>
            ) : (
              <ColorButton variant="contained">Login</ColorButton>
            )}
          </div>
        </div>
        <div className={classes.circles}>
          <motion.span
            variants={ballsVariants}
            animate="animation"
            transition={{
              y: { yoyo: Infinity, duration: 0.8, ease: "easeInOut" },
            }}
            className={classes.circles1}
          ></motion.span>
          <motion.span
            variants={ballsVariants}
            animate="animation"
            transition={{
              y: { yoyo: Infinity, duration: 1, ease: "easeInOut" },
            }}
            className={classes.circles2}
          ></motion.span>
          <motion.span
            variants={ballsVariants}
            animate="animation"
            transition={{
              y: { yoyo: Infinity, duration: 1.2, ease: "easeInOut" },
            }}
            className={classes.circles3}
          ></motion.span>
        </div>
      </div>
      <div>{props.children}</div>
      <div className={classes.panel}>
        <div className={classes.circles}>
          <motion.span
            variants={ballsVariants}
            animate="animation"
            transition={{
              y: { yoyo: Infinity, duration: 1.2, ease: "easeInOut" },
            }}
            className={classes.circles3}
          ></motion.span>
          <motion.span
            variants={ballsVariants}
            animate="animation"
            transition={{
              y: { yoyo: Infinity, duration: 1, ease: "easeInOut" },
            }}
            className={classes.circles2}
          ></motion.span>
          <motion.span
            variants={ballsVariants}
            animate="animation"
            transition={{
              y: { yoyo: Infinity, duration: 0.8, ease: "easeInOut" },
            }}
            className={classes.circles1}
          ></motion.span>
        </div>
        <div className={classes.authHeader}>
          <div className={classes.signUpButton}>
            {location.pathname !== SIGNUP ? (
              <Link to={SIGNUP}>
                <ColorButton variant="contained">Sign up</ColorButton>
              </Link>
            ) : (
              <ColorButton variant="contained">Sign up</ColorButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
