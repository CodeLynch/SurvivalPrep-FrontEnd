import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    communityid: 0,
    currentForumid: 0,
    currentThreadid: 0,
    showAddForum: false,
    showEditForum: false,
    showDeleteForum: false,
    showAddThread: false,
    showEditThread: false,
    showDeleteThread:false,
    showEditPost: false,
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
        toggleAddForum: (state) => {
            state.showAddForum = !state.showAddForum;
        },
        toggleEditForum: (state) => {
            state.showEditForum = !state.showEditForum;
        },
        toggleDeleteForum: (state) => {
            state.showDeleteForum = !state.showDeleteForum;
        },
        toggleAddThread: (state) => {
            state.showAddThread = !state.showAddThread;
        },
        toggleEditThread: (state) => {
            state.showEditThread = !state.showEditThread;
        },
        toggleDeleteThread: (state) => {
            state.showDeleteThread = !state.showDeleteThread;
        },
        toggleEditPost: (state) => {
            state.showEditPost = !state.showEditPost;
        },
    }
});

export default ForumSlice.reducer
export const { communityIdReducer, forumIdReducer, threadIdReducer, toggleAddForum, toggleAddThread, toggleDeleteForum,
toggleDeleteThread, toggleEditForum, toggleEditPost, toggleEditThread} = ForumSlice.actions;