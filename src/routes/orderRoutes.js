import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    console.log(orders);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
});

// POST new order
router.post("/", async (req, res) => {
  try {
    const {
      id,
      customer,
      productName,
      items,
      amount,
      status,
      date,
    } = req.body;

    const order = await Order.create({
      id,
      customer,
      productName,
      items,
      amount,
      status,
      date,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create order",
      error: error.message,
    });
  }
});

export default router;