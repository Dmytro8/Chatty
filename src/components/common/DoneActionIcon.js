import React, { Fragment } from "react";
import PropTypes from "prop-types";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import DoneIcon from "@material-ui/icons/Done";

export const DoneActionIcon = ({ isMe, isReaded }) => {
  const iconStyle = {
    color: "#22bb33",
  };
  return (
    <Fragment>
      {isMe && isReaded && <DoneAllIcon style={iconStyle} />}
      {isMe && !isReaded && <DoneIcon style={iconStyle} />}
    </Fragment>
  );
};

DoneActionIcon.defaultProps = {
  isMe: false,
  isReaded: false,
};

DoneActionIcon.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};
