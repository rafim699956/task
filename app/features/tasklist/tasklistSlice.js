import { createSlice } from '@reduxjs/toolkit';
export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        tasks: [
            {
                id: 1,
                date: '2026-01-01',
                employee: 'Nowaz Mia',
                taskPriority: 'High',
                taskContent: 'Review and update the Q1 project roadmap deliverables and align with the core team.',
                status: 'Pending',
                repeatTask: "Yes"
            },
            {
                id: 2,
                date: '2026-01-02',
                employee: 'Noyon',
                taskPriority: 'Normal',
                taskContent: 'Perform routine database maintenance and create backup copies of the server logs.',
                status: 'Pending',
                repeatTask: "Yes"
            },
            {
                id: 3,
                date: '2026-01-03',
                employee: 'Nowaz Mia',
                taskPriority: 'High',
                taskContent: 'Fix critical high-priority UI issues on the client dashboard before 2:00 PM today.',
                status: 'Pending',
                repeatTask: "Yes"
            },
            {
                id: 4,
                date: '2026-01-04',
                employee: 'Noyon',
                taskPriority: 'Normal',
                taskContent: 'Setup repository and start working on the initial layout for the new project module.',
                status: 'Pending',
                repeatTask: "Yes"
            }
        ],
    },
    reducers: {
        addNewTask(state, action) {
            let id = state.tasks.length + 1;
            state.tasks.push({ ...action.payload, id, status: 'Pending' });
        },
        updateTask(state, action) {
            const index = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = {
                    ...state.tasks[index],
                    ...action.payload
                };
            }
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        }
    }
})
export const { addNewTask, updateTask, deleteTask } = taskListSlice.actions;
export default taskListSlice.reducer;