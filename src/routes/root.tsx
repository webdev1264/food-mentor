import { Link, Outlet } from "react-router-dom";

import avocado from "../assets/logos/avocado.svg";
import "../scss/app.scss";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <div className="header-wrapper">
            <div className="logo">
              <img src={avocado} alt="Avocado" width={19} height={25} />
            </div>
            <div className="main-title-wrapper">
              <h1 className="main-title">Food mentor</h1>
            </div>
          </div>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
