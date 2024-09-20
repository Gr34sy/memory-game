// iconsets
import brandIcons from "../assets/icons/brands";
import electronicsIcons from "../assets/icons/electronics";
import entertainmentIcons from "../assets/icons/entertainment";
import medicineIcons from "../assets/icons/medicine";
import militaryIcons from "../assets/icons/military";
import natureIcons from "../assets/icons/nature";
import polishPolitcsIcons from "../assets/icons/polish-politics";
import spaceIcons from "../assets/icons/space";
import uncategorizedIcons from "../assets/icons/uncategorized";
import letterIcons from "../assets/icons/letters";
import numberIcons from "../assets/icons/numbers";

// utils
import generateRandomNum from "./generateRandomNum";
import { boardSize, themes } from "../types/settingsTypes";
import { board } from "../types/gameTypes";

function getIcons(theme: themes) {
  let icons;

  switch (theme) {
    case "random":
      icons = [
        ...brandIcons,
        ...electronicsIcons,
        ...entertainmentIcons,
        ...letterIcons,
        ...numberIcons,
        ...medicineIcons,
        ...natureIcons,
        ...militaryIcons,
        ...polishPolitcsIcons,
        ...uncategorizedIcons,
        ...spaceIcons,
      ];
      break;

    case "numbers":
      icons = [...numberIcons];
      break;

    case "letters":
      icons = [...letterIcons];
      break;

    case "uncategorized":
      icons = [...uncategorizedIcons];
      break;

    case "polish politics":
      icons = [...polishPolitcsIcons];
      break;

    case "entertainment":
      icons = [...entertainmentIcons];
      break;

    case "brands":
      icons = [...brandIcons];
      break;

    case "electronics":
      icons = [...electronicsIcons];
      break;

    case "medicine":
      icons = [...medicineIcons];
      break;

    case "military":
      icons = [...militaryIcons];
      break;

    case "nature":
      icons = [...natureIcons];
      break;

    case "space":
      icons = [...spaceIcons];
      break;
  }

  return icons;
}

function generateBoard(theme: themes, boardSize: boardSize): board {
  const arraySize = Math.pow(Number(boardSize.slice(1)), 2);

  // getting the icon set
  let icons = getIcons(theme);
  const iconsToUse: string[] = [];
  for (let i = 0; i < arraySize / 2; i++) {
    const randomIcon = icons[generateRandomNum(icons.length)];
    iconsToUse.push(randomIcon);
    icons = icons.filter((icon) => icon !== randomIcon);
  }

  // creating board array of the given length and  creating array with avialable positions
  const board = Array(arraySize).fill("");
  let avialablePositions: number[] = [];
  for (let i = 0; i < board.length; i++) {
    avialablePositions.push(i);
  }

  // adding each icon name twice to the board array in random place
  iconsToUse.forEach((icon) => {
    const pos1 =
      avialablePositions[generateRandomNum(avialablePositions.length)];
    board[pos1] = icon;
    avialablePositions = avialablePositions.filter((pos) => pos !== pos1);

    const pos2 =
      avialablePositions[generateRandomNum(avialablePositions.length)];
    board[pos2] = icon;
    avialablePositions = avialablePositions.filter((pos) => pos !== pos2);
  });

  return {
    fieldSize: boardSize === "g6" ? "small" : "big",
    fields: board.map((field) => {
      return {
        name: field,
        status: "undiscovered",
      };
    }),
  };
}

export default generateBoard;
