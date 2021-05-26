import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Nav = () => {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  return (
    <div>
      {user.id ? (
        <>
          <nav>
            <Link className="btn from-right" to="/user/profile">
              profile
            </Link>

            <Link
              className="btn from-right"
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
        <>
          <nav>
            <Link className="btn from-left" to="/user/login">
              login
            </Link>
            <Link className="btn from-right" to="/user/signup">
              signup
            </Link>
          </nav>
        </>
      )}
    </div>
  );
};

export default Nav;
