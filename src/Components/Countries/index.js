import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";
import covidAxios from "../../axios";
import axios from "axios";
import Spinner from "../Layout/Spinner";
import Table from "../Layout/Table";
const Index = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const getUserIP = await axios.get("https://api.ipify.org");
      // const getUserLocationData = await axios.get(
      //   `https://api.ipgeolocation.io/ipgeo?apiKey=c244e709e5a54d0898b72b1e2905a3ee&ip=${getUserIP.data}&fields=country_name`
      // );
      // const userCountry = getUserLocationData.data.country_name;
      const res = await covidAxios.get(`/countries`);
      const filterdResponse = res.data.filter((item, index) => {
        return index !== 0;
      });
      setResponseData(filterdResponse);
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
    <div className={classes.countries}>
      {responseData.length > 0 ? null : <Spinner />}
      <h2 className={classes.countries_primary}>All Countries</h2>
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
