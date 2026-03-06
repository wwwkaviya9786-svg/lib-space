import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/book.route.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Home route (Cannot GET / fix)
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

// Routes
app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);

// Server start
app.listen(PORT, () => {
  connectDb();
  console.log(`Our server is working at PORT :${PORT}`);
});