import React from "react";
import "./Header.css";
import {
  FiSearch,
  FiBell,
  FiClock,
  FiSquare,
  FiSun,
  FiStar,
  FiMenu,
} from "react-icons/fi";

const Header = ({
  darkMode,
  toggleTheme,
  toggleSidebar,
  toggleNotifications,
}) => {
  return (
    <div className={`header ${darkMode ? "dark" : "light"}`}>
      {/* Left */}
      <div className="header-left">
        <FiMenu className="icon clickable" onClick={toggleSidebar} />
        <FiStar className="icon" />
        <span className="breadcrumb">Dashboards / Default</span>
      </div>

      {/* Right */}
      <div className="header-right">
        <div className="search-box">
          <FiSearch className="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <FiSun className="icon clickable" onClick={toggleTheme} />
        <FiClock className="icon" />
        <FiBell className="icon clickable" onClick={toggleNotifications} />
        <FiSquare className="icon" />
      </div>
    </div>
  );
};

export default Header;
