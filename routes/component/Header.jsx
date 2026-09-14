import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-25 bg-orange-200">
      <div className="w-full max-w-300 h-[inherit] bg-blue-100 mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="text-2xl font-semibold">QuickDelivery</div>
        </Link>
        <nav className="flex gap-5">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-lg font-semibold py-2 px-4 ${isActive ? "underline underline-offset-10 decoration-red-600" : ""}`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-lg font-semibold py-2 px-4 ${isActive ? "underline underline-offset-10 decoration-red-600" : ""}`
            }
          >
            Cart
          </NavLink>
          
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-lg font-semibold py-2 px-4 ${isActive ? "underline underlin-offset-10 decoration-red-600" : ""}`
            }
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
