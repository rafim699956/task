import { createSlice } from '@reduxjs/toolkit';
export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        tasks: [
            {
                date: '01-01-2026',
                actionId: 'Nawaz Mia',
                employee: 'Nawaz Mia',
                taskPriority: 'High',
                taskContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex laboriosam nisi ab non quidem',
                status: 'Pending',
            },
            {
                date: '01-01-2026',
                actionId: 'Noyon',
                employee: 'Noyon',
                taskPriority: 'Normal',
                taskContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex laboriosam nisi ab non quidem',
                status: 'Pending',
            },
        ],
    },
})

export default taskListSlice.reducer;