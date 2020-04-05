import React from "react";
import classes from "./index.module.scss";

const buttons = (props) => {
  return <div className={classes.button}>{props.children}</div>;
};

export default buttons;
