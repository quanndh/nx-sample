import { configureStore } from '@reduxjs/toolkit';
import { counterSliceReducer } from '@nx-sample/redux';

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
