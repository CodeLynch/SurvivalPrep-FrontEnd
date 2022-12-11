import { configureStore } from '@reduxjs/toolkit';

import logInReducer from './features/LogInSlice'
import FamilyReducer from './features/FamilySlice'
import PostReducer from './features/PostSlice';



export const store = configureStore({
    reducer: {
        login: logInReducer,
        family: FamilyReducer,
        post: PostReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>