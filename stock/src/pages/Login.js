import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/login`,
        { email, password }
      );
      console.log(user);
      // localStorage.setItem("userId", user.data.user.id);
      // setUser(user.data.user);
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
