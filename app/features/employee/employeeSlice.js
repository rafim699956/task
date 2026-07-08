import { createSlice } from '@reduxjs/toolkit';
export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'],
    },
})

export default employeeSlice.reducer;