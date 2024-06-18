import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

// Define a type for the slice state
// interface CounterState {
//   value: string;
// }

// // Define the initial state using that type
// let initialState: CounterState = {
//   value: "good morning",
// };

let initialState = "good morning"

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    increment: (state) =>  state = "good evening" ,

    decrement: (state) => state = "good afternoon",

    nothing: (state) => state = initialState ,
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const { increment, decrement,nothing } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
