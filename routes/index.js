import express from "express";
import gameRoutes from "./games.js";

const router = express.Router();

// Use game routes under '/games'
router.use("/games", gameRoutes);

export default router;
