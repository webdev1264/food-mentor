import { Link, Outlet } from "react-router-dom";
import "../scss/app.scss";

function Root() {
  return (
    <>
      <Link to="/">
        <h1>Food mentor</h1>
      </Link>
      <Outlet />
    </>
  );
}

export default Root;
