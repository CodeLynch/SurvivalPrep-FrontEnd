import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  

import logInReducer from './features/LogInSlice'
import FamilyReducer from './features/FamilySlice'
import TipReducer from './features/TipSlice'
import PostReducer from './features/PostSlice'
import ForumReducer from './features/ForumSlice'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

// const persistedLoginReducer = persistReducer(persistConfig, logInReducer)
// const persistedFamilyReducer = persistReducer(persistConfig, FamilyReducer)
// const persistedPostReducer = persistReducer(persistConfig, PostReducer)
// const persistedForumReducer = persistReducer(persistConfig, ForumReducer)

const reducers = combineReducers({
    login: logInReducer,
    family: FamilyReducer,
    tip: TipReducer,
    post: PostReducer,
    forum: ForumReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })




export type RootState = ReturnType<typeof store.getState>