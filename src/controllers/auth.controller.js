import bcrypt from "bcrypt";
import validate from "../utils/validate.js";
import User from "../models/User.js";
import { createToken } from "../utils/jwtUtils.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const { isError, errors } = validate(fullname, email, password);

    if (isError) {
      return res.status(400).json(errors);
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Logout Error" });
  }
};