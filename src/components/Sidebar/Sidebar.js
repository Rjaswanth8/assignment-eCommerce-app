import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiUser,
  FiFileText,
  FiFolder,
  FiShoppingBag,
  FiBookOpen,
  FiBarChart2,
  FiSettings,
  FiBriefcase,
  FiMessageCircle,
  FiX, // Close icon
} from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = ({ darkMode, mobileOpen, setMobileOpen }) => {
  const [openProfile, setOpenProfile] = useState(true);

  const getActiveClass = (isActive, baseClass) =>
    isActive ? `${baseClass} active` : baseClass;

  return (
    <div
      className={`sidebar ${darkMode ? "dark" : "light"} ${
        mobileOpen ? "open" : ""
      }`}
    >
      {/* Close button for mobile */}
      {mobileOpen && (
        <div className="sidebar-close" onClick={() => setMobileOpen(false)}>
          <FiX size={24} />
        </div>
      )}

      {/* Header */}
      <div className="sidebar-header">
        <div className="profile">
          <img src="/man.png" alt="profile" className="profile-img" />
          <span className="profile-name">ByeWind</span>
        </div>
      </div>

      {/* Favorites */}
      <div className="menu-section">
        <span className="menu-label">Favorites</span>
        <NavLink
          to="/overview"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <span className="dot"></span>
          <span className="menu-text">Overview</span>
        </NavLink>
        <NavLink
          to="/projects"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <span className="dot"></span>
          <span className="menu-text">Projects</span>
        </NavLink>
      </div>

      {/* Dashboards */}
      <div className="menu-section">
        <span className="menu-label">Dashboards</span>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <FiBarChart2 className="menu-icon" />
          <span className="menu-text">Default</span>
        </NavLink>
        <NavLink
          to="/dashboard/ecommerce"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <FiShoppingBag className="menu-icon" />
          <span className="menu-text">eCommerce</span>
        </NavLink>
        <NavLink
          to="/dashboard/projects"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <FiFolder className="menu-icon" />
          <span className="menu-text">Projects</span>
        </NavLink>
        <NavLink
          to="/dashboard/courses"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <FiBookOpen className="menu-icon" />
          <span className="menu-text">Online Courses</span>
        </NavLink>
      </div>

      {/* Pages */}
      <div className="menu-section">
        <span className="menu-label">Pages</span>

        {/* User Profile collapsible */}
        <div
          className="menu-item collapsible"
          onClick={() => setOpenProfile(!openProfile)}
        >
          <FiUser className="menu-icon" />
          <span className="menu-text">User Profile</span>
          <span className="dropdown-icon">{openProfile ? "▲" : "▼"}</span>
        </div>
        {openProfile && (
          <div className="submenu">
            <NavLink
              to="/profile/overview"
              className={({ isActive }) =>
                getActiveClass(isActive, "submenu-item")
              }
              onClick={() => setMobileOpen(false)}
            >
              Overview
            </NavLink>
            <NavLink
              to="/profile/projects"
              className={({ isActive }) =>
                getActiveClass(isActive, "submenu-item")
              }
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/profile/campaigns"
              className={({ isActive }) =>
                getActiveClass(isActive, "submenu-item")
              }
              onClick={() => setMobileOpen(false)}
            >
              Campaigns
            </NavLink>
            <NavLink
              to="/profile/documents"
              className={({ isActive }) =>
                getActiveClass(isActive, "submenu-item")
              }
              onClick={() => setMobileOpen(false)}
            >
              Documents
            </NavLink>
            <NavLink
              to="/profile/followers"
              className={({ isActive }) =>
                getActiveClass(isActive, "submenu-item")
              }
              onClick={() => setMobileOpen(false)}
            >
              Followers
            </NavLink>
          </div>
        )}

        {/* Other pages */}
        <NavLink
          to="/account"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <FiSettings className="menu-icon" />
          <span className="menu-text">Account</span>
        </NavLink>
        <NavLink
          to="/corporate"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <FiBriefcase className="menu-icon" />
          <span className="menu-text">Corporate</span>
        </NavLink>
        <NavLink
          to="/blog"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <FiFileText className="menu-icon" />
          <span className="menu-text">Blog</span>
        </NavLink>
        <NavLink
          to="/social"
          end
          className={({ isActive }) => getActiveClass(isActive, "menu-item")}
          onClick={() => setMobileOpen(false)}
        >
          <FiMessageCircle className="menu-icon" />
          <span className="menu-text">Social</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
