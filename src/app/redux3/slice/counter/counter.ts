import { createSlice } from "@reduxjs/toolkit";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";


let initialState:string = "good morning"

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    increment: (state) =>  state = "good evening" ,

    decrement: (state) => state = "good afternoon",

    addanything: (state , action: PayloadAction<string>) => state = action.payload

    // addbynum: (state, action: PayloadAction<number> ) => state += action.payload ,
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const { increment, decrement,addanything } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
