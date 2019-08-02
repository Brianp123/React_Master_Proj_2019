import React from "react";
import HomePage from "./Pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import HatsPage from "./Pages/Hatspage/hatpage.component";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
