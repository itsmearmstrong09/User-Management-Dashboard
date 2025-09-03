import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header">
      <div className="brand" style={{ alignContent: "center" }}>
        <nav>
          <Link to="/" end style={{ marginRight: 12 }}>
            Home
          </Link>
          <NavLink to="/users" style={{ marginRight: 12 }}>
            Users
          </NavLink>
          <button onClick={toggleTheme} title="Toggle theme">
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </nav>
      </div>
    </header>
  );
}
