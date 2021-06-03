import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import SearchCrypto from "./SearchCrypto";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import Book1 from "../images/book1.png";
import Book2 from "../images/book2.png";
import Book3 from "../images/book3.png";

const Profile = () => {
  // const user = useContext(UserContext);
  const [reload, setReload] = useState(false);
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  return (
    <div className="profile">
      <h1> Welcome Back! {user.name.toUpperCase()}</h1>
      <SearchCrypto setReload={setReload} />
      <Sidebar setReload={setReload} reload={reload} />
    </div>
  );
};

export default Profile;
