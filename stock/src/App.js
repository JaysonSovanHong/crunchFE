import axios from "axios";
import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import "./App.css";

import Chart from "./Components/Chart";
import Headers from "./Components/Headers";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SearchCrypto from "./pages/SearchCrypto";
import Signup from "./pages/Signup";

function App() {
  const { userState } = useContext(UserContext);

  // useEffect(function () {
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then(console.log);
  // });

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
          path="/stocks"
          render={() => {
            return <Chart />;
          }}
        />
        <Route
          exact
          path="/stock"
          render={() => {
            return <SearchCrypto />;
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
