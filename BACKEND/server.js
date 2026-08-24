const dotenv = require("dotenv");

dotenv.config();


const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const redirectRoutes = require("./routes/redirect.routes");
const urlRoutes = require("./routes/url.routes");

const app = express();

connectDB();

const allowOrigins = [
  "https://shortivo-q8v3.vercel.app",
  "http://localhost:3000",
]

app.use(cors({
  origin: allowOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("URL Shortener Backend is running");
});


app.use("/api/url", urlRoutes);
app.use("/", redirectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});