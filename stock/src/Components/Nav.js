import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="btn from-left" to="/user/login">
        login
      </Link>
      <Link className="btn from-right" to="/user/signup">
        signup
      </Link>
    </nav>
  );
};

export default Nav;
