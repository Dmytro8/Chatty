import React, { useState, useCallback, useContext } from "react";
import { SwipeableDrawer } from "@material-ui/core";

import { Toolbar } from "./Toolbar";
import { SideDrawer } from "./SideDrawer";

import classes from "./MobileNavbar.module.scss";
import { ProfileContext } from "../../../context/ProfileContext";

export const MobileNavbar = () => {
  const [isSideDrawerOpened, setIsSideDrawerOpened] = useState(false);
  const [isAnotherPageOpened, setIsAnotherPageOpened] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setIsSideDrawerOpened(open);
  };
  const profile = useContext(ProfileContext);
  return (
    <div>
      <Toolbar
        toggleDrawer={toggleDrawer}
        isAnotherPageOpened={isAnotherPageOpened}
        setIsAnotherPageOpened={setIsAnotherPageOpened}
        searchUserValue={profile.searchUser}
        setSearchUserValue={profile.setSearchUser}
      />
      <SwipeableDrawer
        open={isSideDrawerOpened}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <SideDrawer
          // toggleDrawer={toggleDrawer}
          setIsSideDrawerOpened={setIsSideDrawerOpened}
          setIsAnotherPageOpened={setIsAnotherPageOpened}
        />
      </SwipeableDrawer>
    </div>
  );
};
