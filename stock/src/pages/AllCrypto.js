import Chart from "../Components/Chart";
import { UserContext } from "../Context/UserContext";

const AllCrypto = () => {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  return (
    <div>
      <Chart />
    </div>
  );
};

export default AllCrypto;
