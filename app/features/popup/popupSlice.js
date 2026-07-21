import { createSlice } from '@reduxjs/toolkit';
export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isOpen: false,
        mode: "add", // add | edit
        selectedTask: null,
    },
    reducers: {
        openAddPopup: (state) => {
            state.isOpen = true;
            state.mode = "add";
            state.selectedTask = null;
        },

        openEditPopup: (state, action) => {
            state.isOpen = true;
            state.mode = "edit";
            state.selectedTask = action.payload;
            console.log(action.payload);
        },

        closePopup: (state) => {
            state.isOpen = false;
            state.mode = "add";
            state.selectedTask = null;
        },
    }
})
export const { activePopup, openAddPopup, openEditPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;