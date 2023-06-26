import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  numLargeStraights: {
    type: Number,
    default: 0,
    required: true,
  },
  numSmallStraights: {
    type: Number,
    default: 0,
    required: true,
  },
  numFullHouses: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Game = mongoose.model("Game", GameSchema);

export default Game;
