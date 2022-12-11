import { configureStore } from '@reduxjs/toolkit';

import logInReducer from './features/LogInSlice'
import FamilyReducer from './features/FamilySlice'
import TipReducer from './features/TipSlice';



export const store = configureStore({
    reducer: {
        login: logInReducer,
        family: FamilyReducer,
        tip: TipReducer
    },
});

export type RootState = ReturnType<typeof store.getState>