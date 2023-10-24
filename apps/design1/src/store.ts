import { configureStore } from '@reduxjs/toolkit';
import { counterSliceReducer } from '@nx-sample/redux';
import localCounterSlice from '@design1/redux/test/slice';

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    localCounter: localCounterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
