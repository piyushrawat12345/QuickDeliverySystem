import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import app from "./app.js";

import dns from 'node:dns';
dns.setServers(['8.8.8.8','1.1.1.1']);
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server is running: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
