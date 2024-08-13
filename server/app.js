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
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/qrCodes", qrCodeRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server up and running on port'));
