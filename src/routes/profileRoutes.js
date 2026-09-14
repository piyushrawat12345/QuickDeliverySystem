import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

// GET PROFILE
router.get("/", async (req, res) => {
  try {
    let profile = await Profile.findOne();

    if (!profile) {
      profile = await Profile.create({
        name: "User",
        email: "user@example.com",
        phone: "",
        address: "",
      });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("GET profile error:", error);

    res.status(500).json({
      message: "Failed to fetch profile",
      error: error.message,
    });
  }
});

// UPDATE PROFILE
router.put("/", async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    let profile = await Profile.findOne();

    if (!profile) {
      profile = await Profile.create({
        name,
        email,
        phone: phone || "",
        address: address || "",
      });
    } else {
      profile.name = name;
      profile.email = email;
      profile.phone = phone || "";
      profile.address = address || "";

      await profile.save();
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: profile,
    });
  } catch (error) {
    console.error("PUT profile error:", error);

    res.status(500).json({
      message: "Failed to update profile",
      error: error.message,
    });
  }
});

export default router;