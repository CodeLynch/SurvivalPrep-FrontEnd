import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userId: 0,
    isAdmin: false
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
        },
        adminReducer: (state, action) =>{
            const bool = action.payload
            state.isAdmin = bool;
        }
    }
});

export default LogInSlice.reducer
export const { loginReducer, logoutReducer,userIdReducer, adminReducer} = LogInSlice.actions;