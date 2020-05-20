import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a
            className="navbar-brand logo-font-size font-weight-bold"
            href="first"
          >
            HIREMEE GOLD LOGO
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active pl-1">
              <a className="nav-link" href="first">
                How It Works <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item pl-1">
              <a className="nav-link" href="/pricing">
                Test Type
              </a>
            </li>
            <li className="nav-item pl-1">
              <a className="nav-link" href="first">
                Test Library
              </a>
            </li>
            <li className="nav-item pl-1">
              <a className="nav-link" href="first">
                Gold Features
              </a>
            </li>
            <li className="nav-item pl-1">
              <a className="nav-link" href="first">
                Contacts
              </a>
            </li>
            <li className="nav-item pl-1">
              <a className="nav-link" href="first">
                Pricing
              </a>
            </li>
            <li className="nav-item pl-1">
              <a className="nav-link" href="first">
                Signup
              </a>
            </li>
            <li className="nav-item pl-1">
              <a className="nav-link" href="first">
                Signin
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
