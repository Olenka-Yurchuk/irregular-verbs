import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Verbs } from "../api/verbs";
import { selectNumberOfVerbs } from "./userActivities";

// Define a type for the slice state
interface VerbsState {
  data: Verbs;
}

// Define the initial state using that type
const initialState: VerbsState = {
  data: {},
};

export const verbsSlice = createSlice({
  name: "verbs",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setVerbsData: (state, action: PayloadAction<Verbs>) => {
      state.data = action.payload;
    },
  },
});

export const { setVerbsData } = verbsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectVerbsData = (state: RootState) => state.verbs.data;

export const selectRandomVerbs = createDraftSafeSelector(
  [selectVerbsData, selectNumberOfVerbs],
  (verbs, numberOfVerbs) => {
    const entries = Object.entries(verbs);

    const randomEntries = entries
      .sort(() => 0.5 - Math.random())
      .slice(0, numberOfVerbs);
    return randomEntries;
  }
);

export default verbsSlice.reducer;
