import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Redirect, Route } from "react-router-dom";
import Book1 from "../images/book1.png";
import Book2 from "../images/book2.png";
import Book3 from "../images/book3.png";
import Book4 from "../images/book4.png";
import Book5 from "../images/book5.png";
import Book6 from "../images/book6.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userState, FetchUser } = useContext(UserContext);
  const [user, setUser] = userState;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/login`,
        { email, password }
      );
      console.log(newUser);
      localStorage.setItem("userId", newUser.data.user.id);
      setUser(newUser.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginEmail"></label>
          <input
            placeholder="EMAIL"
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="loginPassword"></label>
          <input
            placeholder="PASSWORD"
            id="loginPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="backgroundBookShelf">
        <img className="left" src={Book1}></img>
        <img className="right" src={Book2}></img>
        <img className="left" src={Book3}></img>
        <img className="right" src={Book4}></img>
        <img className="left" src={Book5}></img>
        <img className="right" src={Book6}></img>
      </div>
    </div>
  );
};

export default Login;
