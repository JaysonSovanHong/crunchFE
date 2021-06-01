import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Logo from "../pages/Logo.png";

const Nav = () => {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  return (
    <div>
      {user.id ? (
        <>
          <nav>
            <Link className="btn from-right" to="/user/profile">
              Profile
            </Link>

            <Link className="btn from-top" to="/stocks">
              library
            </Link>

            <Link
              to="/user/logout"
              className="btn from-left"
              onClick={() => {
                localStorage.removeItem("userId");
                setUser({});
              }}
            >
              logout
            </Link>
          </nav>
        </>
      ) : (
        <div className="navbar">
          <nav>
            <Link className="btn from-left" to="/user/login">
              login
            </Link>

            <Link to="/">
              {" "}
              <img src={Logo} width="100px"></img>
            </Link>

            <Link className="btn from-right" to="/user/signup">
              signup
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Nav;
