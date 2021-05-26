import Chart from "../Components/Chart";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import SearchCrypto from "./SearchCrypto";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <SearchCrypto />
      <Chart />
    </div>
  );
};

export default Profile;
