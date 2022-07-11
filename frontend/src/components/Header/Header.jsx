import Traduction from "@components/Traduction";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../contexts/GlobalContext";
import "./Header.css";

export default function Header() {
  const { setLang } = useContext(GlobalContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "current-page" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "current-page" : "")}
              to="/produits"
            >
              <Traduction reference="produits" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "current-page" : "")}
              to="/contact"
            >
              <Traduction reference="contact" />
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="lang-choice">
        <button type="button" onClick={(e) => setLang("fr")}>
          Français
        </button>
        <button type="button" onClick={(e) => setLang("en")}>
          English
        </button>
        <button type="button" onClick={(e) => setLang("es")}>
          Español
        </button>
      </div>
    </header>
  );
}
