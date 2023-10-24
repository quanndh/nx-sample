import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 5;
    },
    decrement: (state) => {
      state.value -= 5;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

const counterSliceReducer = counterSlice.reducer;

const { increment, decrement, incrementByAmount } = counterSlice.actions;

export { counterSliceReducer, increment, decrement, incrementByAmount };
