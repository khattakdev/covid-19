import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import Button from "./button";
const index = () => {
  const buttons = [
    {
      id: 1,
      content: "Global",
      path: "/global",
    },
    {
      id: 2,
      content: "My Country",
      path: "/mycountry",
    },
    {
      id: 3,
      content: "All Countries",
      path: "allcountries",
    },
  ];
  return (
    <div className={classes.main}>
      {buttons.map((button) => (
        <Link key={button.id} to={button.path}>
          <Button>{button.content}</Button>
        </Link>
      ))}
    </div>
  );
};

export default index;
