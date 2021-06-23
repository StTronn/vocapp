import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      style={{ background: "#1d3557" }}
      className="font-bold absolute w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0">
                <Logo />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => (
  <svg
    width="47"
    height="36"
    viewBox="0 0 47 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.84395 32L23.5 7.44114L39.1561 32H7.84395Z"
      stroke="#457B9D"
      stroke-width="8"
    />
  </svg>
);

export default Nav;
