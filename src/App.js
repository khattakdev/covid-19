import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Header";
import Main from "./Components/Main";
import Global from "./Components/Global";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/global" exact component={Global} />
        </Switch>
        {/* <Main /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
