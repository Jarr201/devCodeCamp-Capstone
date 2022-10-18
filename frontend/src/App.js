// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    passedSearchTerm();
  })

  function passedSearchTerm(searchTerm) {
    let response = searchTerm
    setData(response)
  };

  return (
    <div class="background-color">
      <Navbar />
      <SearchBar submittedSearchTerm={passedSearchTerm} />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/searchpage" element={<SearchPage data={data} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
