import { createSlice } from "@reduxjs/toolkit";

const RockPaperScissorsGameSlice = createSlice({
  name: "game",
  initialState: {
    gameArray: [
      { id: "rock", src: "./assets/img/rock.png", status: true },
      { id: "paper", src: "./assets/img/paper.png", status: false },
      { id: "scissors", src: "./assets/img/scissors.png", status: false },
    ],
    result: "",
    numberOfWin: 0,
    totalPlayTurn: 0,
    computerPlayer: {},
  },
  reducers: {
    placeABet(state, action) {
      const id = action.payload;
      state.gameArray.map((item) => {
        if (item.id === id) {
          item.status = true;
        }
        if (item.id !== id) {
          item.status = false;
        }
      });
    },

    playGame(state) {
      //make the random for computer's choice
      //   let count = 0;
      //   let computerChoice = setInterval(() => {
      //     if (count < 10) {
      //       let randomNumber = Math.floor(Math.random() * 3);
      //       state.computerPlayer.id = state.gameArray[randomNumber].id;
      //       state.computerPlayer.src = state.gameArray[randomNumber].src;
      //       count++;
      //     } else {
      //       clearInterval(computerChoice);
      //     }
      //   }, 100);

      let randomNumber = Math.floor(Math.random() * 3);
      state.computerPlayer = state.gameArray[randomNumber];

      //get the result
      let playerId = state.gameArray.find((item) => item.status === true).id;
      let computerId = state.computerPlayer.id;
      switch (playerId) {
        case "rock":
          if (computerId === "rock") {
            state.result = "GAME DRAWS!!!";
          }
          if (computerId === "paper") {
            state.result = "YOU LOOSE!!!";
          }
          if (computerId === "scissors") {
            state.result = "YOU WIN!!!";
            state.numberOfWin += 1;
          }
          break;

        case "paper":
          if (computerId === "paper") {
            state.result = "GAME DRAWS!!!";
          }
          if (computerId === "scissors") {
            state.result = "YOU LOOSE!!!";
          }
          if (computerId === "rock") {
            state.result = "YOU WIN!!!";
            state.numberOfWin += 1;
          }
          break;

        case "scissors":
          if (computerId === "scissors") {
            state.result = "GAME DRAWS!!!";
          }
          if (computerId === "rock") {
            state.result = "YOU LOOSE!!!";
          }
          if (computerId === "paper") {
            state.result = "YOU WIN!!!";
            state.numberOfWin += 1;
          }
          break;

        default:
          break;
      }
      state.totalPlayTurn += 1;
    },
  },
});

const { actions, reducer } = RockPaperScissorsGameSlice;
export const { placeABet, playGame } = actions;
export default reducer;
