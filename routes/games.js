import express from "express";
import { getGames, addGame } from "../controllers/gameController.js";

const router = express.Router();

// Route for fetching all games
router.get("/", getGames);

// Route for creating a new game
router.post("/", addGame);

export default router;
