import React from "react";
import "./Notifications.css";
import { FiX, FiUser, FiWifi } from "react-icons/fi";
import { FaBug } from "react-icons/fa";

const Notifications = ({ darkMode, open, onClose }) => {
  const notifications = [
    {
      icon: <FaBug />,
      message: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      icon: <FiUser />,
      message: "New user registered",
      time: "59 minutes ago",
    },
    {
      icon: <FaBug />,
      message: "You have a bug that needs to be fixed.",
      time: "12 hours ago",
    },
    {
      icon: <FiWifi />,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      icon: <img src="https://i.pravatar.cc/36?u=bug" alt="" />,
      message: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      icon: <img src="https://i.pravatar.cc/36?u=version" alt="" />,
      message: "Released a new version",
      time: "59 minutes ago",
    },
    {
      icon: <img src="https://i.pravatar.cc/36?u=submit" alt="" />,
      message: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      icon: <img src="https://i.pravatar.cc/36?u=pageX" alt="" />,
      message: "Modified data in Page X",
      time: "Today, 11:59 AM",
    },
  ];

  const contacts = [
    { name: "Kartik Gupta", avatar: "https://i.pravatar.cc/36?u=kartik" },
    { name: "Natali Craig", avatar: "https://i.pravatar.cc/36?u=natali" },
    { name: "Drew Cano", avatar: "https://i.pravatar.cc/36?u=drew" },
    { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/36?u=orlando" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`notifications-overlay ${open ? "open" : ""}`}
        onClick={onClose}
      />

      <div className={`notifications-drawer ${open ? "open" : ""}`}>
        <div className={`notifi ${darkMode ? "dark" : "light"}`}>
          {/* Header */}
          <div className="notifications-header">
            <h3>Notifications</h3>
            <FiX className="close-btn" onClick={onClose} />
          </div>

          {/* Notifications List */}
          <div className="notifications-section">
            <h3>Notifications</h3>
            <ul>
              {notifications.map((item, idx) => (
                <li key={idx}>
                  <span className="noti-icon">{item.icon}</span>
                  <div>
                    <p>{item.message}</p>
                    <time>{item.time}</time>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div className="notifications-section">
            <h3>Activities</h3>
            <ul>
              {activities.map((item, idx) => (
                <li key={idx}>
                  <span className="noti-icon">{item.icon}</span>
                  <div>
                    <p>{item.message}</p>
                    <time>{item.time}</time>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="notifications-section">
            <h3>Contacts</h3>
            <ul className="contacts-list">
              {contacts.map((c, idx) => (
                <li key={idx} className="contact-item">
                  <img src={c.avatar} alt={c.name} />
                  <span>{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
