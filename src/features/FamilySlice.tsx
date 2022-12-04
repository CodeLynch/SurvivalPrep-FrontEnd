import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    familyId: 0,
}

const FamilySlice = createSlice({
    name: 'family',
    initialState,
    reducers: {

        familyIdReducer: (state, action) =>{
            const id = action.payload
            state.familyId = id;
        }
    }
});

export default FamilySlice.reducer
export const { familyIdReducer } = FamilySlice.actions;