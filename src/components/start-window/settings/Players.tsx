// types
import { playerAmount, playerNames } from "../../../types/settingsTypes";
import { Dispatch, SetStateAction } from "react";

// components
import SettingsBox from "./settings-box/SettingsBox";
import Button from "../../button/Button";

type PlayersProps = {
  setPlayerAmount: Dispatch<SetStateAction<playerAmount>>;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentPlayerAmount: playerAmount;
  currentPlayerNames: playerNames;
};

const Players = ({
  setPlayerAmount,
  handleNameChange,
  currentPlayerAmount,
  currentPlayerNames,
}: PlayersProps) => {
  return (
    <>
      <SettingsBox label="Number of Players">
        <Button
          buttonType="selection"
          onClick={() => setPlayerAmount(1)}
          isActive={currentPlayerAmount === 1}
        >
          1
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayerAmount(2)}
          isActive={currentPlayerAmount === 2}
        >
          2
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayerAmount(3)}
          isActive={currentPlayerAmount === 3}
        >
          3
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayerAmount(4)}
          isActive={currentPlayerAmount === 4}
        >
          4
        </Button>
      </SettingsBox>

      <SettingsBox label="Player 1">
        <input
          type="text"
          placeholder="Name"
          name="p1"
          maxLength={20}
          className="custom-input"
          onChange={handleNameChange}
          value={currentPlayerNames.p1}
        />
      </SettingsBox>

      {/* player names */}
      {currentPlayerAmount > 1 && (
        <SettingsBox label="Player 2">
          <input
            type="text"
            placeholder="Name"
            name="p2"
            maxLength={20}
            className="custom-input"
            onChange={handleNameChange}
            value={currentPlayerNames.p2}
          />
        </SettingsBox>
      )}

      {currentPlayerAmount > 2 && (
        <SettingsBox label="Player 3">
          <input
            type="text"
            placeholder="Name"
            name="p3"
            maxLength={20}
            className="custom-input"
            onChange={handleNameChange}
            value={currentPlayerNames.p3}
          />
        </SettingsBox>
      )}

      {currentPlayerAmount > 3 && (
        <SettingsBox label="Player 4">
          <input
            type="text"
            placeholder="Name"
            name="p4"
            maxLength={20}
            className="custom-input"
            onChange={handleNameChange}
            value={currentPlayerNames.p4}
          />
        </SettingsBox>
      )}
      {/* player names */}
    </>
  );
};

export default Players;
