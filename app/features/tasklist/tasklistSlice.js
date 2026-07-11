import { createSlice } from '@reduxjs/toolkit';
export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        tasks: [
            {
                id: 1,
                date: '01-01-2026',
                employee: 'Nawaz Mia',
                taskPriority: 'High',
                taskContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex laboriosam nisi ab non quidem',
                status: 'Pending',
            },
            {
                id: 2,
                date: '01-01-2026',
                employee: 'Noyon',
                taskPriority: 'Normal',
                taskContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex laboriosam nisi ab non quidem',
                status: 'Pending',
            },
        ],
    },
    reducers: {
        addNewTask(state, action) {
            let id = state.tasks.length + 1;
            state.tasks.push({ ...action.payload, id, status: 'Pending' });
        }
    }
})
export const { addNewTask } = taskListSlice.actions;
export default taskListSlice.reducer;