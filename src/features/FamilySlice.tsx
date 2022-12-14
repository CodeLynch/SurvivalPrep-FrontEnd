import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    familyId: 0,
    creatorId: 0,
    showCreateFamilyModal: false,
    showAddFamilyMemberModal: false,
    showJoinFamilyModal: false,
    showRemoveMemberModal: false,
}

const FamilySlice = createSlice({
    name: 'family',
    initialState,
    reducers: {
        familyIdReducer: (state, action) =>{
            const id = action.payload
            state.familyId = id;
        },
        creatorIdReducer: (state, action) =>{
            const id = action.payload
            state.creatorId = id;
        },
        toggleCreateFamily: (state) => {
            state.showCreateFamilyModal = !state.showCreateFamilyModal;
        },
        toggleAddFamilyMember: (state) => {
            state.showAddFamilyMemberModal = !state.showAddFamilyMemberModal;
        },
        toggleJoinFamily: (state) => {
            state.showJoinFamilyModal = !state.showJoinFamilyModal;
        },
        toggleRemoveMember: (state) => {
            state.showRemoveMemberModal = !state.showRemoveMemberModal;
        }
    }
});

export default FamilySlice.reducer
export const { familyIdReducer, creatorIdReducer, toggleAddFamilyMember, toggleCreateFamily, toggleJoinFamily, toggleRemoveMember} = FamilySlice.actions;