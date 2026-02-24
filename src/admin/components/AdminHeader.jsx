import { useState, useEffect } from "react";
import {
  Menu,
  Plus,
  Search,
  Maximize,
  Minimize,
  Moon,
  Sun,
  Bell,
} from "lucide-react";
import {
  User,
  Activity,
  CreditCard,
  Settings,
  LogOut,
  DollarSign,
  CheckCircle
} from "lucide-react";
import { ChevronLeft } from "lucide-react";


import "../styles/header.css";

export default function AdminHeader({ toggleSidebar, sidebarOpen }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  /* FULLSCREEN */
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (!e.target.closest(".profile-wrapper")) {
      setShowProfile(false);
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, []);


  /* DARK MODE */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    setDarkMode(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <header className="admin-header">
      <div className="header-left">
        <button className="icon-btn sidebar-toggle" onClick={toggleSidebar}>
  {sidebarOpen ? (
    <ChevronLeft size={22} />
  ) : (
    <Menu size={22} />
  )}
</button>



        <button className="plus-btn">
          <Plus size={18} />
        </button>

        <button className="mega-btn">MEGA MENU</button>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <Search size={18} />
        </button>

        <div className="flag">🇺🇸</div>

        <button className="icon-btn" onClick={toggleFullscreen}>
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>

        {/* DARK MODE BUTTON */}
        <button className="icon-btn" onClick={toggleTheme}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="notification">
          <Bell size={18} />
          <span className="badge">3</span>
        </div>

        <div
  className="profile-wrapper"
  onClick={(e) => {
    e.stopPropagation();
    setShowProfile(!showProfile);
  }}
>

  <img
    src="https://i.pravatar.cc/40"
    alt="profile"
    className="profile-avatar"
  />

  {showProfile && (
    <div className="profile-dropdown">
      <div className="profile-info">
        <img src="https://i.pravatar.cc/50" alt="" />
        <div>
          <strong>Gautam Joshi</strong>
          <span>admin@email.com</span>
        </div>
      </div>

      <div className="dropdown-divider" />

      <ul className="profile-menu">
        <li>
          <CheckCircle size={16} />
          <span>Active</span>
        </li>

        <li>
          <DollarSign size={16} />
          <span>Subscriptions</span>
        </li>

        <li>
          <User size={16} />
          <span>Profile Details</span>
        </li>

        <li>
          <Activity size={16} />
          <span>Activity Feed</span>
        </li>

        <li>
          <CreditCard size={16} />
          <span>Billing Details</span>
        </li>

        <li>
          <Bell size={16} />
          <span>Notifications</span>
        </li>

        <li>
          <Settings size={16} />
          <span>Account Settings</span>
        </li>

        <li className="logout">
          <LogOut size={16} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  )}
</div>
      </div>
    </header>
  );
}