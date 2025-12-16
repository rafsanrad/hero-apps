

import { Github, GithubIcon } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          <img src="logo.png" height={30} width={30} alt="" />
          <Link to="/" className="text-xl text-purple-600 font-bold">
            HERO.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apps">Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        
        <NavLink to="https://github.com/rafsanrad/hero-apps" className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          <GithubIcon></GithubIcon>Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
