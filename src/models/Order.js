import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    customer: {
      type: String,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    items: {
      type: Number,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Delivered", "Pending", "Cancelled", "Out for Delivery"],
      default: "Pending",
    },

    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;