import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const [data, setData] = useState('');

  // useEffect(() => {
  //   passedSearchTerm();
  // });

  // function passedSearchTerm(searchTerm) {
  //   let response = searchTerm
  //   setData(response)
  // };

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>LoDiff</b>
          </Link>
        </li>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Anime
            <span class="caret"></span></button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* <a class="dropdown-item" href="#">All Titles</a> */}
            <a class="dropdown-item" href="#">Latest Titles</a>
            {/* <a class="dropdown-item" href="#">Genres</a> */}
          </div>
        </div>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Manga
            <span class="caret"></span></button>
          <ul class="dropdown-menu">
            {/* <li><a class="dropdown-item" href="#">All Titles</a></li>
            <li><a class="dropdown-item" href="#">Latest Titles</a></li>
            <li><a   class="dropdown-item" href="#">Genres</a></li> */}
            <Link to="/alphascans">
              <li><a class="dropdown-item" href="#" >Alpha Scans</a></li>
            </Link>
            <Link to="/asurascans">
              <li><a class="dropdown-item" href="#">Asura Scans</a></li>
            </Link>
            <Link to="/flamescans">
              <li><a class="dropdown-item" href="#">Flame Scans</a></li>
            </Link>
            <Link to="/luminousscans">
              <li><a class="dropdown-item" href="#">Luminous Scans</a></li>
            </Link>
            <Link to="/realmscans">
              <li><a class="dropdown-item" href="#">Realm Scans</a></li>
            </Link>
          </ul>
        </div>
        {/* <SearchBar submittedSearchTerm={passedSearchTerm} /> */}
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
