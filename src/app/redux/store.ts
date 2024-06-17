
import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./slices/counter"
export const store = configureStore({
  reducer: {
    counter: counterslice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
