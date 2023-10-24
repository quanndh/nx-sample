import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LocalCounterState {
  value: number;
}

const initialState: LocalCounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'localCounter',
  initialState,
  reducers: {
    incrementLocal: (state) => {
      state.value += 1;
    },
    decrementLocal: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementLocal, decrementLocal } = counterSlice.actions;

export default counterSlice.reducer;
