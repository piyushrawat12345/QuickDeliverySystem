import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      default: "",
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    deliveryAddress: {
      type: String,
      default: "",
      trim: true,
    },

    notifications: {
      type: Boolean,
      default: true,
    },

    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Settings = mongoose.model("Settings", settingsSchema);

export default Settings;