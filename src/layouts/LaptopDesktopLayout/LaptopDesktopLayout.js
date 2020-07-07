import React, { useContext, useState } from "react";
import classnames from "classnames/bind";

import classes from "./LaptopDesktopLayout.module.scss";
import { DesktopNavbar } from "../../components/Navbar/Desktop/DesktopNavbar";
import { ProfileContext } from "../../contexts/ProfileContext";
import { OutlinedInput } from "../../components/common/FormControls";
import { IconLabelTabs } from "../../components/common/Tabs";
import { SearchPage } from "../../pages/SearchPage/SearchPage";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
import { Dialogs } from "../../components/Dialogs/Dialogs";
// import bgNav from "../../static/images/vector4.jpg";

let cx = classnames.bind(classes);

export const LaptopDesktopLayout = (props) => {
  const profileContext = useContext(ProfileContext);
  const [isActive, setIsActive] = useState(true);

  const searchSection = cx({
    searchSection: true,
    activeSection: !isActive,
  });
  const channelSection = cx({
    channelsSection: true,
    activeSection: isActive,
  });

  return (
    <div>
      {/* <div className={classes.leftSidePanel}></div> */}
      {/* <div className={classes.backSide} style={bgNavStyle}></div> */}
      <div className={classes.navBar}>
        <DesktopNavbar />
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.chatPanel}>
          <IconLabelTabs
            setIsActive={setIsActive}
            isActive={isActive}
            setSearchUser={profileContext.setSearchUser}
          />
          <div className={classes.tabsSection}>
            <div className={channelSection}>
              <Dialogs />
            </div>
            <div className={searchSection}>
              <div className={classes.searchInputWrapper}>
                <OutlinedInput
                  id="outlined-search"
                  type="search"
                  variant="outlined"
                  placeholder="Search"
                  value={profileContext.searchUser}
                  onChange={(e) => profileContext.setSearchUser(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <SearchPage />
            </div>
          </div>
        </div>
        <div className={classes.chatContent} style={{}}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
