import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">
          <img src="../../assets/imgs/logo.png" alt="" />
          <span className="text-2xl font-bold italic">Learning Fair</span>
        </Link>
      </div>
      <Link to={"/"} className="text-xl mx-4">
        Home
      </Link>
      <Link to={"/courses"} className="text-xl mx-4">
        Courses
      </Link>
      <Link to={"/blogs"} className="text-xl mx-4">
        Blogs
      </Link>
      <Link to={"/login"} className="text-xl mx-4">
        Log In
      </Link>
      <NavLink to={"/signup"} className="text-xl mx-4">
        Sign Up
      </NavLink>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full flex items-center justify-center">
              <img src="../../assets/imgs/logo.png" alt="" />
              {/* <FaUser></FaUser> */}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <span>M Morshedul Islam</span>
            </li>
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
