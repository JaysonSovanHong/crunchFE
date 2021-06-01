import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

const SearchCrypto = (props) => {
  const [searchField, setSearchField] = useState("");
  const [searchCryptos, setSearchCryptos] = useState([]);
  const [cryptoInfo, setCryptoInfo] = useState([]);
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  const getSearchCRYPTO = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stock?query=${searchField}`
    );

    setSearchCryptos(response.data.result);
  };

  const handleClick = async (e, uuid, name) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/stock/save`,
      {
        uuid,
        name,
        email: user.email,
      }
    );
    props.setReload(true);
    // console.log(response.data.result.data.coin);
    // setCryptoInfo(response.data.result.data.coin);
  };

  return (
    <div className="searchgrid">
      <form onSubmit={getSearchCRYPTO}>
        <input
          type="search"
          onChange={(e) => setSearchField(e.target.value)}
          value={searchField}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="searchContainer">
        {searchCryptos.map((crypto) => (
          <div className="singleCrypto" key={crypto.uuid}>
            <p>
              <img src={crypto.iconUrl} alt={crypto.name} />
            </p>
            <p>{crypto.symbol}</p>
            <p> {crypto.name}</p>
            <p></p>
            <button
              onClick={(e) => {
                handleClick(e, crypto.uuid, crypto.name);
              }}
            >
              add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCrypto;
