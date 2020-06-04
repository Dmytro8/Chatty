import React, { useContext } from "react";
import { PropTypes } from "prop-types";

import classes from "./DialogItem.module.scss";
import { ProfileAvatar } from "../../ProfileAvatar/ProfileAvatar";
import { DoneActionIcon } from "../../common/DoneActionIcon";
import { Time } from "../../Messages/Time";
import classnames from "classnames/bind";

let cx = classnames.bind(classes);

export const DialogItem = ({
  isActive,
  name,
  surname,
  isSearch,
  unreaded,
  message,
  createdAt,
  lastSeen,
}) => {
  let dialogClassnames = cx(classes.dialogItem, {
    [classes.dialogItemSearch]: isSearch,
  });
  return (
    <div className={dialogClassnames}>
      <div className={classes.dialogItemAvatar}>
        <ProfileAvatar
          profileUrl={""}
          isOnlineIcon={true}
          isUserActive={isActive}
        />
      </div>
      <div className={classes.dialogItemInfo}>
        <div className={classes.infoTop}>
          {/* <div className={classes.dialogItemUsername}> */}
          <h4>
            {name} {surname}
          </h4>
          {/* </div> */}
          <div className={classes.infoTopRight}>
            <DoneActionIcon isMe isReaded />
            <div className={classes.dialogItemTime}>
              <time className={classes.dialogSearchTime}>
                <Time date={lastSeen} isSearch={isSearch} isActive={isActive} />
              </time>
              <time className={classes.dialogTime}>
                <Time
                  date={createdAt}
                  isSearch={isSearch}
                  isActive={isActive}
                />
              </time>
            </div>
          </div>
        </div>
        <div className={classes.infoBottom}>
          <p>{message}</p>
          {unreaded > 0 && !isSearch && (
            <div className={classes.countWrapper}>
              <span className={classes.countUnread}>{unreaded}</span>
            </div>
          )}
        </div>

        {/* <div className={classes.lastSeen}>last seen at "time"</div> */}
      </div>
      {/* <div className={classes.roomInfo}>
      <span className={classes.lastDate}>12.38 PM</span>
      <span className={classes.countOfUnread}>12</span>
    </div> */}
    </div>
  );
};

DialogItem.defaultProps = {
  lastSeen: new Date().toString(),
  name: "",
  surname: "",
  isSearch: false,
  unreaded: 0,
  message: "It's an example of last message",
  createdAt: new Date(),
};

DialogItem.propTypes = {
  lastSeen: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  isSearch: PropTypes.bool,
  unreaded: PropTypes.number,
  message: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date),
};
