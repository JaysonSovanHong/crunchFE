import Logo from "../pages/Logo.png";
import Nav from "./Nav";
const Headers = () => {
  return (
    <div>
      <div>
        <img src={Logo} width="100px"></img>
      </div>

      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Headers;
