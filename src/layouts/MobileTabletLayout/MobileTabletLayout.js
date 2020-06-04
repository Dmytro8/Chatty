import React from "react";

import classes from "./MobileTabletLayout.module.scss";
import { MobileNavbar } from "../../components/Navbar/Mobile";

export const MobileTabletLayout = (props) => {
  return (
    <div>
      <div className={classes.navBar}>
        <MobileNavbar />
      </div>
      {props.children}
    </div>
  );
};
