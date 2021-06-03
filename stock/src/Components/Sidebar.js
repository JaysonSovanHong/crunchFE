import { UserContext } from "../Context/UserContext";
import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Sidebar = (props) => {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;
  const [data, setData] = useState([]);
  const [favCrypto, setFavCrypto] = useState([]);

  const fetchFav = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stock/watchlist`,
      {
        headers: { Authorization: user.id },
      }
    );
    setData(response.data.watchlist);
    props.setReload(false);
  };

  const fetchInfo = async () => {
    let result = [];
    for (let d of data) {
      console.log(d);
      let info = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/stock/info/?query=${d.crypto_id}`
      );
      const coin = info.data.result.data.coin;
      result.push(coin);
    }
    console.log(result);
    setFavCrypto(result);
  };
  useEffect(fetchInfo, [data]);

  // race conditon
  useEffect(() => {
    fetchFav();
  }, []);

  useEffect(fetchFav, [props.reload]);

  return (
    <div className="sidebar">
      {favCrypto.length > 0 &&
        favCrypto.map((crypto, c) => {
          return (
            <div className="sidebarInner" key={c}>
              <p>{crypto.name}</p>
              <img src={crypto.iconUrl} width="50px"></img>
              <p>${parseFloat(crypto.price).toFixed(2)}</p>
              <p
                className={
                  parseFloat(crypto.change).toFixed(3) > 0
                    ? "changesTwo"
                    : "changes"
                }
              >
                {parseFloat(crypto.change).toFixed(5)}
              </p>
              {/* <p>{crypto.description}</p> */}
              <p>
                <a href={crypto.websiteUrl}>Learn More</a>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Sidebar;
