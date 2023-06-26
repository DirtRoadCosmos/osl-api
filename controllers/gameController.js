import Game from "../models/Game.js";

// Controller for getting all games
const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Controller for adding a new game
const addGame = async (req, res) => {
  const { date, numLargeStraights, numSmallStraights, numFullHouses } =
    req.body;

  try {
    const newGame = new Game({
      date,
      numLargeStraights,
      numSmallStraights,
      numFullHouses,
    });

    const game = await newGame.save();

    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export { getGames, addGame };
