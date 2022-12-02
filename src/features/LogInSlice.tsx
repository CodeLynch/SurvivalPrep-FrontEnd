import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userId: 0
}

const LogInSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        loginReducer: (state) =>{
            state.isLoggedIn = true;
        },
        logoutReducer: (state) =>{
            state.isLoggedIn = false;
        },
        userIdReducer: (state, action) =>{
            const id = action.payload
            state.userId = id;
        }
    }
});

export default LogInSlice.reducer
export const { loginReducer, logoutReducer,userIdReducer } = LogInSlice.actions;