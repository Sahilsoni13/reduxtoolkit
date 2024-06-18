import { PayloadAction, createSlice } from "@reduxjs/toolkit";

let initialState: number = 0;
export const counterSlice = createSlice({
  name: "count2",
  initialState: initialState,
  reducers: {
    addnum: (state) => state + 1,
    subnum: (state) => state - 1,
    addbynum: (state, action: PayloadAction<number>) =>
      (state += action.payload),
    // default : (state) => (state = initialState)
  },
});
// export const { increment, decrement,nothing } = counterSlice.actions;

export const { addnum, subnum, addbynum } = counterSlice.actions;
export default counterSlice.reducer;
