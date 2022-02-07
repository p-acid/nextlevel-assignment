import { configureStore } from '@reduxjs/toolkit';

import currentStartReducer from '../feature/currentStart/currentStartSlice';
import { apiSlice } from '../feature/productList/productListSlice';

export const store = configureStore({
  reducer: {
    currentStart: currentStartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
