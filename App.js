import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DashBoard from "./components/DashBoard/DashBoard";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
};

export default App;
