import axios from "axios";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Headers from "./Components/Headers";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  useEffect(function () {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then(console.log);
  });

  return (
    <div className="App">
      <Headers />

      <Profile />

      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/user/login"
          render={() => {
            return <Login />;
          }}
        />
        <Route
          exact
          path="/user/signup"
          render={() => {
            return <Signup />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
