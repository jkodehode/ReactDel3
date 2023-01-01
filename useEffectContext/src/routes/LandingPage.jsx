import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { DarkModeContext } from "../component/CreateContext/CreateContext";
import { useContext } from "react";
import "./LandingPage.css";
import Lightswitch from "../component/Lightswitch";

function LandingPage() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <Lightswitch />
      <div
        className={
          darkMode ? `Container Container-dark` : `Container Container-light`
        }
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

// header

const API_ENDPOINT = "https://api.coingecko.com/api/v3/coins/";
const logoImp =
  "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860";

function Header() {
  const [data, setData] = useState(null);
  const { darkMode } = useContext(DarkModeContext);
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
    <div className={darkMode ? `header header-dark` : `header header-light`}>
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
          <Link
            to="/Home"
            className={darkMode ? `link link-dark` : `link link-light`}
          >
            CHECK
          </Link>
          <Link
            to="/LearnMorePage"
            className={darkMode ? `link link-dark` : `link link-light`}
          >
            LEARN
          </Link>
          <Link
            to="/NewsPage"
            className={darkMode ? `link link-dark` : `link link-light`}
          >
            NEWS
          </Link>
          <Link
            to="Start"
            className={darkMode ? `link link-dark` : `link link-light`}
          >
            START
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
