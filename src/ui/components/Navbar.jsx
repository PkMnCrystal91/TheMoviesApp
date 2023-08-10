import { useAuthStore } from "../../hooks/useAuthStore";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "../../styles/Navbar.css";

let arr = ["Popular", "Theatre", "Comedie"];

export const Navbar = ({ onChangeCategory }) => {
  const { startLogout, user } = useAuthStore();

  const navigate = useNavigate();

  const onLogout = () => {
    startLogout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <div id="form-container" className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies App
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            {arr.map((value, pos) => {
              return (
                <NavLink
                  key={pos}
                  name={value}
                  className={({ isActive }) =>
                    `nav-item nav-link  ${isActive ? "active" : ""}`
                  }
                  onClick={(e) => {
                    onChangeCategory(e.target.name);
                  }}
                >
                  {value}
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className="d-flex">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            onClick={onLogout}
            className="btn btn-outline-danger ms-2"
            type="submit"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
