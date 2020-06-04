import React from "react";

import onlineIcon from "../../static/icons/onlineIcon.png";
import closeIcon from "../../static/icons/closeIcon.png";

import classes from "./InfoBar.module.scss";

export const InfoBar = ({ room }) => {
  return (
    <div className={classes.infoBar}>
      <div className={classes.leftInnerContainer}>
        <img
          className={classes.onlineIcon}
          src={onlineIcon}
          alt="online icon"
        />
        <h3>{room}</h3>
      </div>
      <div className={classes.rightInnerContainer}>
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};
