import { createSlice } from '@reduxjs/toolkit';
export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        tasks: [
            {
                id: 1,
                date: '01-01-2026',
                employee: 'Nowaz Mia',
                taskPriority: 'High',
                taskContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex laboriosam nisi ab non quidem',
                status: 'Pending',
                repeatTask: "Yes"
            },
            {
                id: 2,
                date: '01-01-2026',
                employee: 'Noyon',
                taskPriority: 'Normal',
                taskContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex laboriosam nisi ab non quidem',
                status: 'Pending',
                repeatTask: "Yes"
            },
            {
                id: 3,
                date: '01-01-2026',
                employee: 'Nowaz Mia',
                taskPriority: 'High',
                taskContent: 'dupur 2tar moddhe kaj ses kore diba',
                status: 'Pending',
                repeatTask: "Yes"
            },
            {
                id: 4,
                date: '01-01-2026',
                employee: 'Noyon',
                taskPriority: 'Normal',
                taskContent: 'notun project add hoyese kaj koro',
                status: 'Pending',
                repeatTask: "Yes"
            },
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
        }
    }
})
export const { addNewTask, updateTask } = taskListSlice.actions;
export default taskListSlice.reducer;