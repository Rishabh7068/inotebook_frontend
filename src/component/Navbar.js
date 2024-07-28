import { React } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const Navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          iNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/home" ? "active" : ""
                }`}
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {!localStorage.getItem("token") ? (
          <form className="d-flex">
            <Link to="/login" className="btn btn-primary mx-1" role="button">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary mx-2" role="button">
              Signup
            </Link>
          </form>
        ) : (
          <form className="d-flex">
            <div className="container">
              <span class="badge text-bg-light mx-3">
                {localStorage.getItem("name")}
              </span>
              <button className="btn btn-primary" onClick={handlelogout}>
                Logout
              </button>
            </div> 
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
