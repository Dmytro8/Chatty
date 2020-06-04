import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./DrawerToggleButton.module.scss";

export const DrawerToggleButton = ({
  toggleDrawer,
  isSearchPanelOpen,
  searchHandler,
  isAnotherPageOpened,
  setIsAnotherPageOpened,
}) => {
  let history = useHistory();

  return isSearchPanelOpen ? (
    <button
      className={classes.toggleButton}
      onClick={() => {
        history.goBack();
        searchHandler();
      }}
    >
      <div className={`${classes.toggleButtonLine} ${classes.active}`} />
      <div className={`${classes.toggleButtonLine} ${classes.active}`} />
      <div className={`${classes.toggleButtonLine} ${classes.active}`} />
    </button>
  ) : (
    <>
      {isAnotherPageOpened ? (
        <button
          className={classes.toggleButton}
          onClick={() => {
            history.goBack();
            setIsAnotherPageOpened(false);
          }}
        >
          <div className={`${classes.toggleButtonLine} ${classes.active}`} />
          <div className={`${classes.toggleButtonLine} ${classes.active}`} />
          <div className={`${classes.toggleButtonLine} ${classes.active}`} />
        </button>
      ) : (
        <button className={classes.toggleButton} onClick={toggleDrawer(true)}>
          <div className={classes.toggleButtonLine} />
          <div className={classes.toggleButtonLine} />
          <div className={classes.toggleButtonLine} />
        </button>
      )}
    </>
  );
};
