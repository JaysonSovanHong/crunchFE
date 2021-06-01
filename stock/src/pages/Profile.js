import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import SearchCrypto from "./SearchCrypto";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";

const Profile = () => {
  const user = useContext(UserContext);
  const [reload, setReload] = useState(false);

  return (
    <div>
      <SearchCrypto setReload={setReload} />
      <Sidebar setReload={setReload} reload={reload} />
    </div>
  );
};

export default Profile;
