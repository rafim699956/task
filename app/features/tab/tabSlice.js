import { createSlice } from '@reduxjs/toolkit';
export const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        tabs: ["Add Task", "Manage Task", "Task Report", "Settings"],
        activeTab: "Add Task"
    },
    reducers: {
        setActiveTab(state, action) {
            state.activeTab = action.payload
        }
    }
})
export const { setActiveTab } = tabSlice.actions;

export default tabSlice.reducer;