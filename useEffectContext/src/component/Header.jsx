import { useState, useEffect } from "react";
import "./Header.css";

import { Outlet, Link } from "react-router-dom";

const API_ENDPOINT = "https://api.coingecko.com/api/v3/coins/";
const logoImp =
  "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860";

function Header() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  //   const logo = "{data && data.cardano.status_updates.project.image.small}";
  return (
    <div className="header">
      <img src={logoImp} alt="" className="logoAda" />
      <h1 className="header-text">cardano</h1>
      {/* {data && (
        <img
          src={data.cardano.status_updates.project.image.small}
          alt=""
        />
      )} */}
      data.cardano.status_updates.project.image.small
      <div>
        <ul className="link-bar">
          <Link to="/Home" className="link">
            CHECK
          </Link>
          <Link to="/LearnMorePage" className="link">
            LEARN
          </Link>
          <Link to="/NewsPage" className="link">
            NEWS
          </Link>
          <Link to="Start" className="link">
            START
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
