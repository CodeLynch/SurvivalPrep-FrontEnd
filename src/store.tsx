import { configureStore } from '@reduxjs/toolkit';

import logInReducer from './features/LogInSlice'
import FamilyReducer from './features/FamilySlice'



export const store = configureStore({
    reducer: {
        login: logInReducer,
        family: FamilyReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>