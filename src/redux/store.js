import { configureStore } from '@reduxjs/toolkit';

import { tweetsReducer } from './tweets/tweetsSlice';

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
  blacklist: ['error', 'status'],
};

export const store = configureStore({
  reducer: {
    tweets: persistReducer(usersConfig, tweetsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
