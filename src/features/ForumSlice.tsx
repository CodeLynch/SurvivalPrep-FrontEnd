import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    communityid: 0,
    currentForumid: 0,
    currentThreadid: 0,
}

const ForumSlice = createSlice({
    name: 'forum',
    initialState,
    reducers: {
        communityIdReducer: (state, action) =>{
            const id = action.payload
            state.communityid = id;
        },
        forumIdReducer: (state, action) =>{
            const id = action.payload
            state.currentForumid = id;
        },
        threadIdReducer: (state, action) =>{
            const id = action.payload
            state.currentThreadid = id;
        },
    }
});

export default ForumSlice.reducer
export const { communityIdReducer, forumIdReducer, threadIdReducer } = ForumSlice.actions;