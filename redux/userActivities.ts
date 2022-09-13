import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface UserActivitiesState {
  numberOfVerbs: number;
}

// Define the initial state using that type
const initialState: UserActivitiesState = {
  numberOfVerbs: 0,
};

export const userActivitiesSlice = createSlice({
  name: "userActivities",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setNumberOfVerbs: (state, action: PayloadAction<number>) => {
      state.numberOfVerbs = action.payload;
    },
  },
});

export const { setNumberOfVerbs } =
  userActivitiesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNumberOfVerbs = (state: RootState) => state.userActivities.numberOfVerbs;


export default userActivitiesSlice.reducer;
