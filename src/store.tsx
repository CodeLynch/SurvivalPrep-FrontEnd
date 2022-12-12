import { configureStore } from '@reduxjs/toolkit';

import logInReducer from './features/LogInSlice'
import FamilyReducer from './features/FamilySlice'
import TipReducer from './features/TipSlice'
import PostReducer from './features/PostSlice'
import ForumReducer from './features/ForumSlice'



export const store = configureStore({
    reducer: {
        login: logInReducer,
        family: FamilyReducer,
        tip: TipReducer,
        post: PostReducer,
        forum: ForumReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>