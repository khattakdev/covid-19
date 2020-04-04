import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import axios from "../../axios";
import Spinner from "../Layout/Spinner";
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
      {!!responseData.cases ? null : <Spinner />}
      <h2 className={classes.global_primary}>Global Data</h2>
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
        <tbody>
          <tr>
            <td>{responseData.cases}</td>
            <td>{responseData.cases}</td>
            <td>{responseData.cases}</td>
            <td>{responseData.cases}</td>
            <td>{responseData.cases}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
