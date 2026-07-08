import { createSlice } from '@reduxjs/toolkit';
export const repetTaskSlice = createSlice({
    name: 'repetTask',
    initialState: [
        'Yes',
        'No',
        'Every Day',
        '7 Days',
        'Monthly',
    ],
})

export default repetTaskSlice.reducer;