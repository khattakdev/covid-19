import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import axios from "../../axios";
import Spinner from "../Layout/Spinner";
import Table from "../Layout/Table";
const Index = () => {
  const [responseData, setResponseData] = useState([]);
  const [fetchedResponse, setFetchedResponse] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/all");
      setResponseData([res.data]);
      setFetchedResponse(true);
    }

    fetchData();
  }, []);

  const show = ["cases", "deaths", "recovered", "updated", "active"];
  return (
    <div className={classes.global}>
      {fetchedResponse ? null : <Spinner />}
      <h2 className={classes.global_primary}>Global Data</h2>
      <Table
        headers={["Cases", "Deaths", "Recovered", "Updated", "Active"]}
        show={show}
        body={responseData}
        singleRow={true}
      />

      {/* <table>
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
      </table> */}
    </div>
  );
};

export default Index;
