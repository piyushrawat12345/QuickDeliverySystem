import mongoose from "mongoose";
import Settings from "../models/Settings.js";

// GET settings
export const getSettings = async (req, res) => {
  try {
    const { userId } = req.params;

    let settings = await Settings.findOne({ userId });

    // If settings don't exist, create default settings
    if (!settings) {
      settings = await Settings.create({
        userId,
        fullName: "User",
        email: "",
        phone: "",
        deliveryAddress: "",
        notifications: true,
        darkMode: false,
      });
    }

    res.status(200).json({
      success: true,
      settings,
    });
  } catch (error) {
    console.error("GET SETTINGS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE settings
export const updateSettings = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check valid MongoDB ID
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    const {
      fullName,
      email,
      phone,
      deliveryAddress,
      notifications,
      darkMode,
    } = req.body;

    const settings = await Settings.findOneAndUpdate(
      { userId: userId },

      {
        $set: {
          fullName: fullName,
          email: email,
          phone: phone,
          deliveryAddress: deliveryAddress,
          notifications: notifications,
          darkMode: darkMode,
        },
      },

      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Settings updated successfully",
      settings,
    });
  } catch (error) {
    console.error("UPDATE SETTINGS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};