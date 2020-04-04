import React from "react";
import classes from "./index.module.scss";
const index = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.loader}>Loading...</div>;
    </div>
  );
};

export default index;
