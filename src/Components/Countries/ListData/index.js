import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";
import covidAxios from "../../../axios";
import Spinner from "../../Layout/Spinner";
import Table from "../../Layout/Table";
const Index = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await covidAxios.get(`/countries`);
      setResponseData(res.data);
    }
    fetchData();
  }, []);

  const dataToShow = [
    "country",
    "cases",
    "todayCases",
    "deaths",
    "todayDeaths",
    "recovered",
    "active",
    "critical",
  ];
  return (
    <div className={classes.listData}>
      {responseData.length > 0 ? null : <Spinner />}
      <input
        className={classes.listData_search}
        placeholder="Search Country"
        type="text"
      />
      <Table
        headers={[
          "No",
          "Country",
          "Cases",
          "Today Cases",
          "Deaths",
          "Today Deaths",
          "Recovered",
          "Active",
          "Critical",
        ]}
        show={dataToShow}
        body={responseData}
      />
    </div>
  );
};

export default Index;
