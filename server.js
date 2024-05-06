const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5050;
const connectDB = require("./dbinit");
const appRoute = require("./routes/appRoutes");

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Multer");
});

app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`listening on http://Localhost:${PORT}`);
});
