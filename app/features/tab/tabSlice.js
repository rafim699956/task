import { createSlice } from '@reduxjs/toolkit';
export const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        tabs: ["AddTask", "ManageTask", "TaskReport", "Settings"],
        activeTab: "AddTask"
    },
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload
        }
    }
})
export const { setActiveTab } = tabSlice.actions;

export default tabSlice.reducer;