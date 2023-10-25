import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './slices/bookSlice';
import commonReducer from './slices/commonSlice';

export const store = configureStore({
  reducer: {
    common: commonReducer,
    books: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
