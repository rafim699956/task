import { createSlice } from '@reduxjs/toolkit';
export const sidebarSlice = createSlice({
    name: 'theme',
    initialState: {
        isOpenSidebar: true,
    },
    reducers: {
        toggleSidebar(state) {
            state.isOpenSidebar = !state.isOpenSidebar;
        }
    }
});
export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;