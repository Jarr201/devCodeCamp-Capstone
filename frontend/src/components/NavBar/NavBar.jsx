import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>LoDiff</b>
          </Link>
        </li>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Anime
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">All Titles</a>
            <a class="dropdown-item" href="#">Latest Titles</a>
            <a class="dropdown-item" href="#">Genres</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Manga
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">All Titles</a>
            <a class="dropdown-item" href="#">Latest Titles</a>
            <a class="dropdown-item" href="#">Genres</a>
            <a class="dropdown-item" href="#">Alpha Scans</a>
            <a class="dropdown-item" href="#">Asura Scans</a>
            <a class="dropdown-item" href="#">Flame Scans</a>
            <a class="dropdown-item" href="#">Luminous Scans</a>
            <a class="dropdown-item" href="#">Omega Scans</a>
            <a class="dropdown-item" href="#">Realm Scans</a>
          </div>
        </div>
        <SearchBar/>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
