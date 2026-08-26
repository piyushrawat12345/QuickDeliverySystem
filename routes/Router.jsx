import React from "react";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFoundPage from "./component/NotFoundPage";

// Auth Pages
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

// Dashboard
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Profile from "./pages/dashboard/Profile";
import Orders from "./pages/dashboard/Orders";
import Settings from "./pages/dashboard/Settings";
import Contact from "./pages/dashboard/Contact";

const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
         element: <ProtectedRoute />,
        children: [{ path: "/cart", element: <Cart /> }],
      },
    ],
  },

  // Auth Routes
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  // Protected Dashboard Routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardHome />,
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/orders",
            element: <Orders />,
          },
          {
            path: "/dashboard/settings",
            element: <Settings />,
          },
          {
            path: "/dashboard/contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

export default router;
/*
path : "/",
        element : <RootLayout />,
        children : [
            {
                path : "/",
                element : <Home />,
            },

            {
                path : "shop",
                element : <Shop />
            }
        ]
            */