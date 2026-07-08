import { createSlice } from '@reduxjs/toolkit';
export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: ['Nowaz Mia', 'Noyon', 'Alice Johnson', 'Bob Brown'],
    },
})

export default employeeSlice.reducer;