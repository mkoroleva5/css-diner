import { createSlice } from "@reduxjs/toolkit";

interface levelState {
  currentLevel: number;
}

const initialState: levelState = {
  currentLevel: 1,
};

const levelStateSlice = createSlice({
  name: "levelState",
  initialState,
  reducers: {
    changeLevel(state, action) {
      if (state.currentLevel > 1 && state.currentLevel <= 10) {
        state.currentLevel = action.payload;
      }
    },
  },
});

export const { changeLevel } = levelStateSlice.actions;

export default levelStateSlice.reducer;
