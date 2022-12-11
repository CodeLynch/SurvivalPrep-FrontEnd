import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCreatePostModal: false,
    showRemovePostModal: false,
}

const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        toggleCreatePost: (state) => {
            state.showCreatePostModal = !state.showCreatePostModal;
        },
        toggleRemovePost:(state) => {
            state.showRemovePostModal = !state.showRemovePostModal;
        },
    }
});

export default PostSlice.reducer
export const { toggleCreatePost,toggleRemovePost } = PostSlice.actions;