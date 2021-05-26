import { useState } from "react";
import axios from "axios";

const SearchCrypto = () => {
  const [searchField, setSearchField] = useState("");
  const [searchCryptos, setSearchCryptos] = useState([]);
  const getSearchCRYPTO = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stock?query=${searchField}`
    );
    setSearchCryptos(response.data.result);
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCrypto;
