import { playerAmount, playerNames } from "../types/settingsTypes";
import { player } from "../types/gameTypes";

function generatePlayers(playerAmount: playerAmount, playerNames: playerNames) {
  const players: player[] = [];

  for (let i = 0; i < playerAmount; i++) {
    const index = `p${i + 1}` as keyof typeof playerNames;
    const name = playerNames[index];
    if (!name) {
      players.push({
        name: `Player ${i + 1}`,
        pairs: 0,
      });
    } else {
      players.push({
        name: name,
        pairs: 0,
      });
    }
  }

  return players;
}

export default generatePlayers;
