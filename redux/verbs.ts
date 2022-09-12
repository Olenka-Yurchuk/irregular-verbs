import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Verbs } from "../api/verbs";

// Define a type for the slice state
interface VerbsState {
  value: number;
  data: Verbs;
}

// Define the initial state using that type
const initialState: VerbsState = {
  value: 0,
  data: {},
};

export const verbsSlice = createSlice({
  name: "verbs",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setVerbsData: (state, action: PayloadAction<Verbs>) => {
      state.data = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setVerbsData } =
  verbsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectVerbsData = (state: RootState) => state.verbs.data;

export default verbsSlice.reducer;
