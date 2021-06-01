import axios from "axios";
import { useEffect, useState } from "react";
import Graph from "./Graph";

const Chart = () => {
  const [getStocks, setGetStocks] = useState([]);
  const getAllStock = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/stocks`
    );
    console.log(response);
    setGetStocks(response.data.message.data.coins);
  };
  useEffect(getAllStock, []);

  return (
    <>
      <ul className="stockInfo">
        {getStocks.map((crypto, c) => {
          return (
            <div className="cryptoGraph" key={crypto.uuid}>
              <p>{crypto.name}</p>
              <p>${crypto.price.substring(0, 11)}</p>
              <p
                className={
                  parseFloat(crypto.change) > 0 ? "changesTwo" : "changes"
                }
              >
                {parseFloat(crypto.change)}
              </p>
              <Graph uuid={crypto.uuid} />

              {/* <div>
                {crypto.sparkline.map((spark, s) => {
                  return <div key={s}>{spark}</div>;
                })}
              </div> */}
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Chart;
