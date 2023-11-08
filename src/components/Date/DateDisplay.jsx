import React from "react";
import "./Date.css";
import moment from "moment/moment";

const DateDisplay = (props) => {
  const { date } = props;

  return (
    <section className="date-display">
      My date is : {moment(date).format("LL")}
    </section>
  );
};

export default DateDisplay;
