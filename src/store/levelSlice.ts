import { createSlice } from "@reduxjs/toolkit";

interface levelState {
  currentLevel: number;
  completedLevels: number[];
}

const getCompletedLevels = () => {
  const completedLevels = localStorage.getItem("completed-levels");

  try {
    return completedLevels ? JSON.parse(completedLevels) : [];
  } catch (err) {
    localStorage.removeItem("completed-levels");
    return [];
  }
};

const initialState: levelState = {
  currentLevel: Number(localStorage.getItem("level")) || 1,
  completedLevels: getCompletedLevels(),
};

const levelStateSlice = createSlice({
  name: "levelState",
  initialState,
  reducers: {
    changeLevel(state, action) {
      state.currentLevel = action.payload;
      localStorage.setItem("level", state.currentLevel.toString());
    },
    addCompletedLevel(state, action) {
      if (!state.completedLevels.includes(action.payload)) {
        state.completedLevels.push(action.payload);
      }
      localStorage.setItem(
        "completed-levels",
        JSON.stringify(state.completedLevels)
      );
    },
  },
});

export const { changeLevel } = levelStateSlice.actions;

export default levelStateSlice.reducer;
