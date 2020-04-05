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
      // API Call to Find User IP
      const getUserIP = await axios.get("https://api.ipify.org");
      const getIPFromLocalStorage = JSON.parse(localStorage.getItem("userIP"));
      const userCurrentIP = getUserIP.data;

      // if User visits First Time or location has been changed
      if (!getIPFromLocalStorage || userCurrentIP !== getIPFromLocalStorage) {
        // Store User IP in Local Storage
        localStorage.setItem("userIP", JSON.stringify(userCurrentIP));
        // API Call to Find User Country name
        const getUserLocationData = await axios.get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=c244e709e5a54d0898b72b1e2905a3ee&ip=${userCurrentIP}&fields=country_name`
        );
        // Store User Country in Local Storage
        localStorage.setItem(
          "userCountry",
          JSON.stringify(getUserLocationData.data.country_name)
        );
        // API Call for COVID Stats
        const userCountry = getUserLocationData.data.country_name;
        const res = await covidAxios.get(`/countries/${userCountry}`);
        setResponseData([res.data]);
      } else {
        const getCountryFromLocalStorage = JSON.parse(
          localStorage.getItem("userCountry")
        );
        const res = await covidAxios.get(
          `/countries/${getCountryFromLocalStorage}`
        );
        setResponseData([res.data]);
      }
    }
    fetchData();
  }, []);

  const dataToShow = [
    "cases",
    "todayCases",
    "deaths",
    "todayDeaths",
    "recovered",
    "active",
    "critical",
  ];
  return (
    <div className={classes.country}>
      {responseData.length > 0 ? null : <Spinner />}
      <h2 className={classes.country_primary}>My Country</h2>
      <Table
        headers={[
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
        singleRow={true}
      />
    </div>
  );
};

export default Index;
