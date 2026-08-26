import React from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BiLogOut } from "react-icons/bi";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const {logout} = useAuth()
  const handleLogout = () => {
    logout()
    navigate("/",{replace:true})
  }

  return (
    <div className="w-full h-screen flex">
      <aside className="shrink-0 w-85 bg-gray-100 overflow-y-auto p-8">
        <div className="p-4">
          <Link
            to="/"
            className="text-purple-600 font-bold text-2xl tracking-wider text-center"
          >
            QuickDelivery
          </Link>
        </div>

        <nav className="flex flex-col gap-3 mt-6 w-full text-center">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `p-3 rounded-md tracking-wide font-semibold ${isActive ? "bg-purple-200 font-bold" : "bg-gray-100"}`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `p-3 rounded-md tracking-wide font-semibold ${isActive ? "bg-purple-200 font-bold" : "bg-gray-100"}`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) =>
              `p-3 rounded-md tracking-wide font-semibold ${isActive ? "bg-purple-200 font-bold" : "bg-gray-100"}`
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `p-3 rounded-md tracking-wide font-semibold ${isActive ? "bg-purple-200 font-bold" : "bg-gray-100"}`
            }
          >
            Settings
          </NavLink>
          <NavLink
            to="/dashboard/contact"
            className={({ isActive }) =>
              `p-3 rounded-md tracking-wide font-semibold ${isActive ? "bg-purple-200 font-bold" : "bg-gray-100"}`
            }
          >
            Contact
          </NavLink>

          <button
            type="button"
            className="p-3.5 rounded-md tracking-wide font-semibold bg-purple-500 text-white flex gap-2 justify-center hover:cursor-pointer hover:bg-purple-600"
            onClick={handleLogout}
          >
          <BiLogOut size={18} /> Logout
          </button>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;