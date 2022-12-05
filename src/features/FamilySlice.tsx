import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    familyId: 0,
    showCreateFamilyModal: false,
    showAddFamilyMemberModal: false,
    showJoinFamilyModal: false,
}

const FamilySlice = createSlice({
    name: 'family',
    initialState,
    reducers: {
        familyIdReducer: (state, action) =>{
            const id = action.payload
            state.familyId = id;
        },
        toggleCreateFamily: (state) => {
            state.showCreateFamilyModal = !state.showCreateFamilyModal;
        },
        toggleAddFamilyMember: (state) => {
            state.showAddFamilyMemberModal = !state.showAddFamilyMemberModal;
        },
        toggleJoinFamily: (state) => {
            state.showJoinFamilyModal = !state.showJoinFamilyModal;
        }
    }
});

export default FamilySlice.reducer
export const { familyIdReducer, toggleAddFamilyMember, toggleCreateFamily, toggleJoinFamily } = FamilySlice.actions;