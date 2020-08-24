import React from "react";
import "./App.css";

import LoginPage from "./Components/LoginPage.js";
import Dashboard from "./Components/Dashboard.js";
import Storyboard from "./Components/Storyboard.js";
import StoryCreateEdit from "./Components/StoryCreateEdit.js";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/storyboard" component={Storyboard} />
        <Route path="/createAndEdit" component={StoryCreateEdit} />
      </Switch>
    </div>
  );
}

export default App;
