const express = require("express");
const { connectDb } = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Initialize Express App
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// connect to DB
connectDb();

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
