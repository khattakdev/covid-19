import React from "react";
import classes from "./index.module.scss";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";
import { ReactComponent as BackIcon } from "../../../assets/back.svg";
const Index = (props) => {
  const history = useHistory();
  const backIcon =
    history.location.pathname === "/" ? null : (
      <Link to="/">
        <BackIcon className={classes.navBar_back} />
      </Link>
    );
  return (
    <div className={classes.navBar}>
      <div className={classes.navBar_content}>
        <LogoIcon />
        <h2 className={classes.navBar_primary}>Covid 19 Statistics</h2>
      </div>
      {backIcon}
    </div>
  );
};

export default Index;
