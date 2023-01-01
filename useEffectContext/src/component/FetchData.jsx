import { useState, useEffect } from "react";
import "./FetchData.css";

const API_ENDPOINT = "https://api.coingecko.com/api/v3/coins/cardano";

function FetchData() {
  const [smtn, setSmtn] = useState(0);
  const [data, setData] = useState(null);
  const [input, setInput] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  function smtnBtn() {
    return setSmtn(smtn + 1);
  }

  function inputValue(event) {
    console.log(data.description.en);
    return setInput(event.target.value);
  }

  const NOK = 12;

  return (
    <div className="App">
      <h1>ADA</h1>
      <div>
        <h2>Current Value</h2>
        {data && (
          <div className="cpPriceBox">
            <p className="cpHeaderText">1 ADA</p>
            <p>=</p>
            <div className="cpDataBox">
              <p>${data.market_data.current_price.nok}USD</p>
              <p>{data.market_data.current_price.usd}NOK</p>
            </div>
          </div>
        )}
      </div>
      <input type="number" className="input" onChange={inputValue} />
      <div>
        <button>Convert</button>
        <button onClick={smtnBtn}>{smtn * NOK}</button>
      </div>
      <div>
        <p>
          {input} $ADA = {NOK} NOK{" "}
        </p>
        <p>...Total in circulation of 45 MILL in total = ..% in circulation</p>
        <p>Test</p>
        <p>
          Cardano is one of the 10 biggest crypto. Technically it can be seen as
          an upgraded version of Ethereum, where many of the problems of ETH is
          already solved. Its also driven by two veterans that was part of
          developing ETH, so they know what they are doing and got theyr name
          already well in the marked.
        </p>
        <p>
          The prices has touched both highs and lows, as any other blokkchain so
          far. Cardano got a limited cap, and 75% of the total amount is already
          circulating gives it big chances of a rise in value, as long as the
          interest keeps building
        </p>
      </div>
    </div>
  );
}

export default FetchData;
