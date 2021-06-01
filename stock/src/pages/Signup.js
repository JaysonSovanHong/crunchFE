import axios from "axios";
import { useState } from "react";
import Book1 from "../images/book1.png";
import Book2 from "../images/book2.png";
import Book3 from "../images/book3.png";
import Book4 from "../images/book4.png";
import Book5 from "../images/book5.png";
import Book6 from "../images/book6.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/signup`,
        { name, email, password }
      );
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
          <label htmlFor="name"></label>
          <input
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email"></label>
          <input
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password"></label>
          <input
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" value="submit">
            Sign Up
          </button>
        </div>
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

export default Signup;
