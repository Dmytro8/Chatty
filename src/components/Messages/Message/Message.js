import React from "react";
import PropTypes from "prop-types";

import classes from "./Message.module.scss";

import classnames from "classnames/bind";
import { Time } from "../Time";
import { DoneActionIcon } from "../../common/DoneActionIcon";
import { ProfileAvatar } from "../../ProfileAvatar/ProfileAvatar";

let cx = classnames.bind(classes);

export const Message = ({
  avatar,
  user,
  body,
  date,
  isMe,
  isReaded,
  isTyping,
}) => {
  let messageClassnames = cx(classes.message, {
    [classes.messageMe]: isMe,
    [classes.messageIsTyping]: isTyping,
  });
  return (
    <div className={messageClassnames}>
      <div className={classes.messageAvatar}>
        <ProfileAvatar profileUrl={avatar} isOnlineIcon={false} />
        {/* <img src={avatar} alt={`Avatar ${user.name} ${user.surname}`} /> */}
      </div>
      <div className={classes.messageContent}>
        <div className={classes.messageBubbleWrapper}>
          <DoneActionIcon isMe={isMe} isReaded={isReaded} />
          <div className={classes.messageBubble}>
            <span></span>
            <span></span>
            <span></span>
            <p className={classes.messageBody}>{body}</p>
          </div>
        </div>
        <time className={classes.messageDate}>
          <Time date={date} />
        </time>
      </div>
    </div>
  );
};

Message.defaultProps = {
  avatar: "",
  user: {
    name: "Alisa",
    surname: "Turena",
  },
  body: "",
  date: "",
  isMe: false,
  isReaded: false,
};

Message.propTypes = {
  avatar: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};
