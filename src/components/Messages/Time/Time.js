import React, { useState, useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import isToday from "date-fns/isToday";
import isThisWeek from "date-fns/isThisWeek";
import isThisYear from "date-fns/isThisYear";
import format from "date-fns/format";
import PropTypes from "prop-types";

export const Time = ({ date, isSearch, isActive }) => {
  const [messageDate, setMessageDate] = useState("");
  useEffect(() => {
    if (date !== "") {
      if (isSearch) {
        setMessageDate(
          formatDistanceToNow(Date.parse(date), { addSuffix: true })
        );
      } else if (isToday(date)) {
        setMessageDate(format(Date.parse(date), "p"));
      } else if (isThisWeek(date)) {
        setMessageDate(format(Date.parse(date), "EEE"));
      } else if (isThisYear(date)) {
        setMessageDate(format(Date.parse(date), "MMM dd"));
      } else {
        setMessageDate(format(Date.parse(date), "PP"));
      }
    }
    return () => {};
  }, [date]);

  if (isSearch && isActive) {
    return <p>online</p>;
  } else return messageDate;
};

Time.defaultProps = {
  date: new Date(),
  isSearch: true,
  isActive: false,
};

// Time.propTypes = {
//   date: PropTypes.string || PropTypes.date,
//   isSearch: PropTypes.bool,
// };
