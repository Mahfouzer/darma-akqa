import React, { useState } from "react";

export default function NavigationList() {
  const [firstSubMenuActive, setFirstSubMenuActive] = useState(false);
  return (
    <nav className="navigation-container">
      <ul className="main-menu">
        <li>
          <a
            href="/nowhere"
            onFocus={() => setFirstSubMenuActive(true)}
            onMouseOver={() => setFirstSubMenuActive(true)}
          >
            Bedingungen
          </a>
          <ul className="sub-menu first-submenu-level">
            <li>
              <a href="/nowhere">
                derma
                <ul className="sub-menu second-submenu-level">
                  <li>
                    <a href="/nowhere">skin</a>
                  </li>
                  <li>
                    <a href="/nowhere">skin</a>
                  </li>
                  <li>
                    <a href="/nowhere">skin</a>
                  </li>
                  <li>
                    <a href="/nowhere">skin</a>
                  </li>
                  <li>
                    <a href="/nowhere">skin</a>
                  </li>
                  <li>
                    <a href="/nowhere">skin</a>
                  </li>
                  <li>
                    <a href="/nowhere">skin</a>
                  </li>
                  <li>
                    <a href="/nowhere">skin</a>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a href="/nowhere"> derma</a>
            </li>
            <li>
              <a href="/nowhere"> derma</a>
            </li>
            <li>
              <a href="/nowhere"> derma</a>
            </li>
            <li>
              <a href="/nowhere"> derma</a>
            </li>
            <li>
              <a href="/nowhere"> derma</a>
            </li>
            <li>
              <a href="/nowhere"> derma</a>
            </li>
            <li>
              <a href="/nowhere"> derma</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/nowhere">Bedingungen</a>
        </li>
        <li>
          <a href="/nowhere">Bedingungen</a>
        </li>
        <li>
          <a href="/nowhere">Bedingungen</a>
        </li>
        <li>
          <a href="/nowhere">Bedingungen</a>
        </li>
        <li>
          <a href="/nowhere">Bedingungen</a>
        </li>
        <li>
          <a href="/nowhere">Bedingungen</a>
        </li>
        <li>
          <a href="/nowhere">Bedingungen</a>
        </li>
      </ul>
    </nav>
  );
}
