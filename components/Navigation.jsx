import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="#">
            People finder example
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex"></form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
