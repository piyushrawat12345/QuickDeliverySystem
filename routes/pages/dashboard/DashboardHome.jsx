import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const [stats, setStats] = useState([
    {
      title: "Total Orders",
      value: 0,
      icon: "📦",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Pending Orders",
      value: 0,
      icon: "⏳",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Delivered Orders",
      value: 0,
      icon: "✅",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Spent",
      value: "₹0",
      icon: "💰",
      color: "bg-blue-100 text-blue-600",
    },
  ]);

  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/dashboard/stats"
        );

        const data = response.data;

        setStats([
          {
            title: "Total Orders",
            value: data.totalOrders || 0,
            icon: "📦",
            color: "bg-purple-100 text-purple-600",
          },
          {
            title: "Pending Orders",
            value: data.pendingOrders || 0,
            icon: "⏳",
            color: "bg-yellow-100 text-yellow-600",
          },
          {
            title: "Delivered Orders",
            value: data.deliveredOrders || 0,
            icon: "✅",
            color: "bg-green-100 text-green-600",
          },
          {
            title: "Total Spent",
            value: `₹${data.totalSpent || 0}`,
            icon: "💰",
            color: "bg-blue-100 text-blue-600",
          },
        ]);

        setRecentOrders(data.recentOrders || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen w-311 bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="mt-1 text-gray-600">
            Welcome back! Here's an overview of your Quick Delivery account.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Link
              key={stat.title}
              to={
                stat.title === "Total Orders" ||
                stat.title === "Pending Orders" ||
                stat.title === "Delivered Orders"
                  ? "/dashboard/orders"
                  : "#"
              }
              className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-800">
                    {stat.value}
                  </h2>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${stat.color}`}
                >
                  {stat.icon}
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/shop"
              className="rounded-lg bg-purple-600 px-5 py-3 font-medium text-white transition hover:bg-purple-700"
            >
              🛍️ Continue Shopping
            </Link>

            <Link
              to="/dashboard/orders"
              className="rounded-lg border border-purple-600 px-5 py-3 font-medium text-purple-600 transition hover:bg-purple-50"
            >
              📦 View Orders
            </Link>

            <Link
              to="/cart"
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              🛒 View Cart
            </Link>

          </div>
        </div>

        {/* Recent Orders */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-md">

          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Recent Orders
            </h2>

            <Link
              to="/dashboard/orders"
              className="text-sm font-medium text-purple-600 hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">

              <tbody>
                {recentOrders.length > 0 ? (
                  recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b last:border-0 hover:bg-gray-50"
                    >

                      <td className="px-4 py-4 font-medium text-gray-800">
                        {order.id}
                      </td>

                      <td className="px-4 py-4 text-gray-700">
                        {order.product || order.productName}
                      </td>

                      <td className="px-4 py-4 font-semibold text-gray-800">
                        ₹{order.amount}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Out for Delivery"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No recent orders found.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mt-8 rounded-xl bg-purple-600 p-6 text-white shadow-md">

          <h2 className="text-xl font-bold">
            🚚 Quick Delivery
          </h2>

          <p className="mt-2 text-purple-100">
            Get your products delivered quickly and safely to your doorstep.
          </p>

          <Link
            to="/shop"
            className="mt-4 inline-block rounded-lg bg-white px-5 py-2 font-medium text-purple-600 hover:bg-gray-100"
          >
            Start Shopping
          </Link>

        </div>

      </div>
    </div>
  );
};

export default DashboardHome;
