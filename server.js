import express from "express";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api", routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
