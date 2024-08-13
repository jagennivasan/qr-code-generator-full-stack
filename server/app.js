const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const qrCodeRoutes = require("./routes/qrCode"); // Import QR Code routes
const cors = require("cors");

const app = express();
connectDB();

app.use(express.json());

app.use(cors({
    origin: ["https://qr-code-generator-full-stack-client.vercel.app"],
    methods:["POST","GET","DELETE"]
  }));

app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/qrCodes", qrCodeRoutes);

// const port = process.env.PORT || 8080;

app.listen(3001, () => console.log('Server up and running on port'));
