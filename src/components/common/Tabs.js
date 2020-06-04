import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SearchIcon from "@material-ui/icons/Search";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles({
  "@global": {
    ".MuiTab-root": {
      minWidth: 140,
    },
    ".MuiTab-textColorSecondary.Mui-selected": {
      color: purple[600],
    },
    ".MuiTabs-indicator": {
      backgroundColor: purple[600],
    },
  },
  root: {
    flexGrow: 1,
  },
});

const tabsStyles = {
  fontSize: "12px",
};

export const IconLabelTabs = ({ setIsActive, isActive, setSearchUser }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {};
  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<ChatBubbleOutlineIcon />}
          label="DIALOGS"
          style={tabsStyles}
          onClick={() => {
            setIsActive(true);
            if (!isActive) {
              setSearchUser("");
            }
          }}
        />
        <Tab
          icon={<SearchIcon />}
          label="SEARCH"
          style={tabsStyles}
          onClick={() => {
            setIsActive(false);
            if (isActive) {
              setSearchUser("");
            }
          }}
        />
      </Tabs>
    </Paper>
  );
};
