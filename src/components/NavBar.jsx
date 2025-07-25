import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/NavBar.css";

export default function NavBar() {
  return (
    <>
      <motion.nav
        className="glass-navbar glass-navbar-fancy"
        initial={{ y: -52, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="nav-logo">BreatheEasy</div>
        <ul>
          <li>
            <NavLink end to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" className={({ isActive }) => isActive ? "active" : ""}>
              Support Us
            </NavLink>
          </li>
        </ul>
      </motion.nav>
      {/* Mini navbar for mobile at the bottom */}
      <nav className="mini-navbar">
        <NavLink end to="/" className={({ isActive }) => isActive ? "active" : ""}>🏠</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>ℹ️</NavLink>
        <NavLink to="/support" className={({ isActive }) => isActive ? "active" : ""}>💖</NavLink>
      </nav>
    </>
  );
}
