import { configureStore } from '@reduxjs/toolkit';

import logInReducer from './features/LogInSlice'




export const store = configureStore({
    reducer: {
        login: logInReducer
    },
});

export type RootState = ReturnType<typeof store.getState>