import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";

import Notifications from "./components/Notifications/Notifications";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false); // new

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen); // new

  return (
    <div className={`app ${darkMode ? "dark-theme" : "light-theme"}`}>
      <Sidebar
        darkMode={darkMode}
        mobileOpen={sidebarOpen}
        setMobileOpen={setSidebarOpen}
      />

      <div className="main-content">
        <Header
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
          toggleNotifications={toggleNotifications} // pass function
        />

        <div className="content-scroll">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route
              path="/dashboard"
              element={<Dashboard darkMode={darkMode} />}
            />
            <Route
              path="/dashboard/ecommerce"
              element={<Orders darkMode={darkMode} />}
            />
            <Route
              path="/overview"
              element={<Dashboard darkMode={darkMode} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard darkMode={darkMode} />}
            />
            <Route
              path="/profile/*"
              element={<Dashboard darkMode={darkMode} />}
            />
          </Routes>
        </div>
      </div>

      {/* Pass open and onClose to Notifications */}
      <Notifications
        darkMode={darkMode}
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </div>
  );
}

export default App;
