// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code

const players = data.players();

const logPlayers = (players) => {
  players.forEach((player) => {
    console.log(
      `PLAYER 1
        NAME: ${player.name}
        LASTNAME: ${player.lastname}
        POSITION: ${player.position}
        `
    );
  });
};

logPlayers(players);

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered A-Z
 */

// Your code

const sortPlayers = (players) => {
  const playersNames = players.map((player) => player.name).sort();
  console.log(playersNames);
};

sortPlayers(players);

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals
 * Output example -> Goals per match: 2.61
 */

const calculateAverageGoals = (players) => {
  const numberOfPlayers = players.length;
  const scoringChancesPerMatch = players.map(
    (player) => Number.parseInt(player.scoringChance) / 100
  );

  const average =
    scoringChancesPerMatch.reduce((acc, value) => acc + value) /
    numberOfPlayers;

  console.log(average);
};

calculateAverageGoals(players);

// Your code

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name
 */

// Your code

const findPlayerByName = (players, playerName) => {
  players.filter((player) => {
    if (player.playerName === playerName) {
      return player.position;
    }
  });
};

findPlayerByName(players, 'Tammy')
