import React from "react";
import classes from "./index.module.scss";

const Index = (props) => {
  return (
    <table
      className={
        props.className
          ? [props.className, classes.table].join(" ")
          : classes.table
      }
    >
      <thead>
        <tr>
          {props.headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.body.map((row, index) => (
          <tr key={row.country}>
            {props.singleRow ? null : <td>{index + 1}</td>}
            {props.show.map((item) => (
              <td key={item}>{row[item]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Index;
