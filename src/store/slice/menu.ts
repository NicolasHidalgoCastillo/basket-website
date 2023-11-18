import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

// Define a type for the slice state
export interface CounterState {
  value?: number;
  enabled: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  enabled: false,
};

export const menu = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMenuEnabled: (state) => {
      state.enabled = !state.enabled;
    },
  },
});

export const { setMenuEnabled } = menu.actions;

export default menu.reducer;
