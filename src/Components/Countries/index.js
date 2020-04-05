import React from "react";
import classes from "./index.module.scss";
import ListData from "./ListData";
const Index = () => {
  return (
    <div className={classes.countries}>
      <h2 className={classes.countries_primary}>All Countries</h2>
      <ListData />
    </div>
  );
};

export default Index;
