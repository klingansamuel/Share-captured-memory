const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();

//routes
const sharedMemoryRoutes = require("./routes/shared_memory");

//calling environment variables
env.config();

app.use(cors());

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", sharedMemoryRoutes);

//db info
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db = process.env.DB_NAME;
const port = process.env.PORT;

const URL = `mongodb+srv://${db_username}:${db_password}@cluster0.w9huf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(URL).then(() => {
    console.log("database connected successfully");
  });
} catch (e) {
  console.log("error connecting to database", e.message);
}

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
