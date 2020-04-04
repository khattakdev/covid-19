import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import axios from "../../axios";
const Index = () => {
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/all");
      console.log(res.data);
      setResponseData(res.data);
    }

    fetchData();
  }, []);
  return (
    <div className={classes.global}>
      <table>
        <thead>
          <tr>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Updated</th>
            <th>Active</th>
          </tr>
        </thead>
      </table>
      <h2>Global Data</h2>
      <p> Deaths: {responseData.cases}</p>
    </div>
  );
};

export default Index;
