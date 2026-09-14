import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const orders = await Order.find();

    const totalOrders = orders.length;

    const pendingOrders = orders.filter(
      (order) => order.status === "Pending"
    ).length;

    const deliveredOrders = orders.filter(
      (order) => order.status === "Delivered"
    ).length;

    const totalSpent = orders.reduce(
      (total, order) => total + order.amount,
      0
    );

    const recentOrders = orders
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);

    res.json({
      totalOrders,
      pendingOrders,
      deliveredOrders,
      totalSpent,
      recentOrders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch dashboard data",
      error: error.message,
    });
  }
});

export default router;