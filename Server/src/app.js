const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const mobileRoutes = require("./routes/mobileRoutes");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");

//Connect to the database
connectDB();

//Middleware
const corsOptions = {
  origin: 'http://192.168.1.100:5000', // Địa chỉ IP của máy tính phát triển
  credentials: true,
};
app.use(cookieParser()); // Dùng middleware để parse cookie
app.use(cors(corsOptions)); // Áp dụng CORS với cấu hình trên
app.use(express.json()); // Xử lý các req sang JSON
// Cấu hình để phục vụ tĩnh các tệp từ thư mục `sc/assets/images`
app.use(
  "/images",
  express.static(path.join(__dirname, "../src/assets/images"))
);

//Routes
app.use("/movie", movieRoutes);

//User routes
app.use("/user", userRoutes);

//Mobile routes
app.use("/mobile", mobileRoutes);

app.get("/test-cors", (req, res) => {
  res.json({ message: "CORS is working!" });
});

module.exports = app;
