import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/orders"
      );

      setOrders(response.data);
    } catch (error) {
      console.log("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="p-6">Loading orders...</div>;
  }

  return (
    <div className="min-h-screen w-314 bg-gray-100 p-6">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Orders
        </h1>

        <p className="mt-1 text-gray-500">
          Manage and track all your delivery orders
        </p>
      </div>

      {/* Summary */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-5">

        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm text-gray-500">
            Total Orders
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {orders.length}
          </h2>
        </div>

        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm text-gray-500">
            Delivered
          </p>

          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {
              orders.filter(
                (order) => order.status === "Delivered"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm text-gray-500">
            Pending
          </p>

          <h2 className="mt-2 text-2xl font-bold text-yellow-500">
            {
              orders.filter(
                (order) => order.status === "Pending"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm text-gray-500">
            Cancelled
          </p>

          <h2 className="mt-2 text-2xl font-bold text-red-500">
            {
              orders.filter(
                (order) => order.status === "Cancelled"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-lg bg-white p-5 shadow">
          <p className="text-sm text-gray-500">
            Shipped
          </p>

          <h2 className="mt-2 text-2xl font-bold text-yellow-500">
            {
              orders.filter(
                (order) => order.status === "Shipped"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-lg bg-white shadow">

        <table className="w-full min-w-200 text-left">

          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">ProductName</th>
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">

            {orders.map((order) => (
              <tr
                key={order._id}
                className="hover:bg-gray-50"
              >

                <td className="px-4 py-4 font-medium text-gray-800">
                      {order.id}
                    </td>

                    <td className="px-4 py-4 text-gray-700">
                      {order.customer}
                    </td>

                    <td className="px-4 py-4 text-gray-700">
                      {order.productName}
                    </td>

                    <td className="px-4 py-4 text-gray-700">
                      {order.items}
                    </td>

                    <td className="px-4 py-4 font-semibold text-gray-800">
                      {order.amount}
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

                    <td className="px-4 py-4 text-gray-700">
                      {order.date}
                    </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Orders;
