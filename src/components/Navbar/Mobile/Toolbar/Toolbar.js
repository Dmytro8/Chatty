import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./Toolbar.module.scss";
import { DrawerToggleButton } from "../SideDrawer/DrawerToggleButton";
import { Logo } from "../../../Logo";
import { Link } from "react-router-dom";

export const Toolbar = ({
  toggleDrawer,
  isAnotherPageOpened,
  setIsAnotherPageOpened,
  searchUserValue,
  setSearchUserValue,
}) => {
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);
  const searchHandler = () => {
    setIsSearchPanelOpen((prevState) => !prevState);
  };
  useEffect(() => {
    return () => {
      setSearchUserValue("");
    };
  }, [isSearchPanelOpen]);

  return (
    <header className={classes.header}>
      <nav
        className={`${classes.headerNav} ${
          isSearchPanelOpen ? classes.headerNavSearch : null
        }`}
      >
        <div className={classes.navToggleButton}>
          <DrawerToggleButton
            toggleDrawer={toggleDrawer}
            searchHandler={searchHandler}
            isSearchPanelOpen={isSearchPanelOpen}
            isAnotherPageOpened={isAnotherPageOpened}
            setIsAnotherPageOpened={setIsAnotherPageOpened}
          />
        </div>
        {isSearchPanelOpen ? (
          <div className={classes.navSearchInput}>
            <input
              autoFocus
              type="search"
              value={searchUserValue}
              placeholder="Search"
              onChange={(e) => setSearchUserValue(e.target.value)}
            />
          </div>
        ) : (
          <>
            <div className={classes.navLogo}>
              <Logo />
            </div>
            <>
              {isAnotherPageOpened ? (
                <div
                  className={classes.navSearchIcon}
                  style={{ marginLeft: "30px" }}
                ></div>
              ) : (
                <div className={classes.navSearchIcon}>
                  <Link to="/search">
                    <SearchIcon onClick={searchHandler} />
                  </Link>
                </div>
              )}
            </>
          </>
        )}
      </nav>
    </header>
  );
};
