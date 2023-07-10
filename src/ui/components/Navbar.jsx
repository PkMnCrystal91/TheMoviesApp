import { useAuthStore } from "../../hooks/useAuthStore";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
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
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies App
        </Link>

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
            onClick={startLogout}
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
