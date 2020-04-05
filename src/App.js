import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Header";
import Main from "./Components/Main";
import Global from "./Components/Global";
import Country from "./Components/Country";
import Countries from "./Components/Countries";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/global" exact component={Global} />
          <Route path="/country" exact component={Country} />
          <Route path="/countries" exact component={Countries} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
