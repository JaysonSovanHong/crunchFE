import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
  const [user, setUser] = userState;

  // useEffect(function () {
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then(console.log);
  // });

  return (
    <div className="App">
      <Headers />

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
          path="/user/profile"
          render={() => {
            if (user.id) {
              return <Profile />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />

        <Route
          exact
          path="/stocks"
          render={() => {
            if (user.id) {
              return <Chart />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/stock"
          render={() => {
            if (user.id) {
              return <SearchCrypto />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/user/login"
          render={() => {
            if (user.id) {
              return <Login />;
            }
          }}
        />
        <Route
          exact
          path="/user/signup"
          render={() => {
            if (user.id) {
              return <Signup />;
            }
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
