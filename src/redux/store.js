import { configureStore } from "@reduxjs/toolkit";
import RockPaperScissorsGameReducer from "./RockPaperScissorsGameReducer";

const store = configureStore({
  reducer: {
    game: RockPaperScissorsGameReducer,
  },
});

export default store;
