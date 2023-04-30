import { configureStore } from '@reduxjs/toolkit';

import { tweetsReducer } from './tweets/tweetsSlice';
// import { filterReducer } from './filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const usersConfig = {
  key: 'tweets',
  storage,
};

export const store = configureStore({
  reducer: {
    tweets: persistReducer(usersConfig, tweetsReducer),

    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
