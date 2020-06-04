import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Join.module.scss";

export const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={classes.joinOuterContainer}>
      <div className={classes.joinInnerContainer}>
        <h1 className={classes.heading}>Join</h1>
        <div>
          <input
            placeholder="Type a name"
            className={classes.joinInput}
            type="text"
            onChange={event => setName(event.target.value)}
          />
          <input
            placeholder="Type a room"
            className={`${classes.joinInput} ${classes.mt20}`}
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={`${classes.button} ${classes.mt20}`} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
