import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import classnames from "classnames/bind";

import classes from "./ChatPage.module.scss";
import { ProfileAvatar } from "../../components/ProfileAvatar/ProfileAvatar";
import { useHttp } from "../../hooks/httpHook";
import { Spinner } from "../../components/common/FormControls";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { InputAdornment } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import { Message } from "../../components/Messages/Message/Message";
import ScrollToBottom from "react-scroll-to-bottom";

import userAvatar from "../../static/images/userAvatar.jpg";
import meAvatar from "../../static/images/meAvatar.jpg";

export const ChatPage = () => {
  let { username } = useParams();
  const { request } = useHttp();
  const [user, setUser] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [valueMessage, setValueMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      // setIsDataLoading(true);
      const data = await request(`/api/user/getuser/${username}`, "GET");
      setUser(data[0]);
      setIsDataLoading(false);
    };
    fetchData();

    return () => {
      setIsDataLoading(true);
    };
  }, [username]);
  return (
    <section className={classes.chatSection}>
      {isDataLoading ? (
        <Spinner />
      ) : (
        <div className={classes.chat}>
          <div className={classes.chatHeader}>
            <div className={classes.leftSide}>
              <div className={classes.imgWrapper}>
                <ProfileAvatar
                  profileUrl={""}
                  isOnlineIcon={true}
                  isUserActive={user.is_active}
                />
              </div>
              <div className={classes.userStatus}>
                <h3>
                  {user.name} {user.surname}
                </h3>
                <h5>{user.is_active ? "online" : "offline"}</h5>
              </div>
            </div>
            <div className={classes.rightSide}>
              <span>
                <MoreVertIcon fontSize="inherit" />
              </span>
            </div>
          </div>
          <div className={classes.chatContent}>
            <div className={classes.messagesWrapper}>
              <ScrollToBottom className={classes.messagesScroll}>
                <Message
                  avatar={userAvatar}
                  body={`Hello, I'm Alisa`}
                  date="April 17, 2020, 19:36:25"
                />
                <Message
                  avatar={meAvatar}
                  body={`Hello, I'm Kacper`}
                  date="April 17, 2020, 21:05:25"
                  isMe={true}
                  isReaded={true}
                />
                <Message
                  avatar={userAvatar}
                  body={`Hello, I'm Alisa`}
                  date="April 17, 2020, 19:36:25"
                  isReaded={true}
                />
                <Message
                  avatar={meAvatar}
                  body={`Hello, I'm Kacper`}
                  date="April 17, 2020, 21:05:25"
                  isMe={true}
                />
                <Message avatar={userAvatar} isTyping />
              </ScrollToBottom>
              {/* <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3>
              <h3>message</h3> */}
            </div>
          </div>
          <div className={classes.chatFooter}>
            <AttachFileIcon className={classes.attach} />
            <input
              type="text"
              placeholder="Write your message..."
              value={valueMessage}
              onChange={(e) => setValueMessage(e.target.value)}
            />
            <SendIcon className={classes.send} />
          </div>
        </div>
      )}

      <div className={classes.userSidePanel}>
        {isDataLoading ? (
          <Spinner />
        ) : (
          <div>
            <div className={classes.userTopPanel}>
              <div className={classes.userSideAvatar}>
                <ProfileAvatar
                  profileUrl={""}
                  isOnlineIcon={false}
                  isUserActive={user.is_active}
                />
              </div>
              <h2>
                {user.name} {user.surname}
              </h2>
            </div>
            <section>
              <div className={classes.sectionItem}>
                <h4>Username</h4>
                <h5>@{user.username}</h5>
              </div>
            </section>
          </div>
        )}
      </div>
    </section>
  );
};
