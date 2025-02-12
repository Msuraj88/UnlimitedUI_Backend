const express = require("express");
const { connectDB, sequelize } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start Server
const startServer = async () => {
  await connectDB();
  await sequelize.sync(); // Sync models with database
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
