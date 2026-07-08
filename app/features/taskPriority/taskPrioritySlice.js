import { createSlice } from '@reduxjs/toolkit';
export const taskPrioritySlice = createSlice({
    name: 'taskPriority',
    initialState: [
        'Normal',
        'Medium',
        'High',
    ],
})

export default taskPrioritySlice.reducer;