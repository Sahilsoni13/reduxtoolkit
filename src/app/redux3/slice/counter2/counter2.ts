import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";
import exp from "constants";
let initialState: number = 0;
export const count2 = createSlice({
  name: "count2",
  initialState: initialState,
  reducers: {
    addnum: (state) => state + 1,
    subnum: (state) => state - 1,
    // default : (state) => (state = initialState)
  },
});
// export const { increment, decrement,nothing } = counterSlice.actions;

export const { addnum, subnum ,  } = count2.actions;
export default count2.reducer;