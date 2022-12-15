import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAddTipModal: false,
    showRemoveTipModal: false,
    showUpdateTipModal: false,
}

const TipSlice = createSlice({
    name: 'tip',
    initialState,
    reducers: {
        toggleAddTip: (state) => {
            state.showAddTipModal = !state.showAddTipModal;
        },
        toggleRemoveTip:(state) => {
            state.showRemoveTipModal = !state.showRemoveTipModal;
        },
        toggleUpdateTip:(state) => {
            state.showUpdateTipModal = !state.showUpdateTipModal;
        }
    }
});

export default TipSlice.reducer
export const { toggleAddTip, toggleRemoveTip, toggleUpdateTip } = TipSlice.actions;