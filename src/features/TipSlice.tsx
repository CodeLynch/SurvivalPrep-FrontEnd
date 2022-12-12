import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAddTipModal: false,
    showRemoveTipModal: false,
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
    }
});

export default TipSlice.reducer
export const { toggleAddTip, toggleRemoveTip } = TipSlice.actions;