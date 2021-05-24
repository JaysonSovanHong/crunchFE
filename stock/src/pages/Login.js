import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginEmail">Email:</label>
          <input
            id="loginEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="loginPassword">Password:</label>
          <input
            id="loginPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
