import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export const createToken = (user) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = () => {};
