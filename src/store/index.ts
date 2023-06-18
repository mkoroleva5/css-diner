import { configureStore } from "@reduxjs/toolkit";

import levelStateReducer from "./levelSlice";

export const store = configureStore({
  reducer: {
    levelState: levelStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
