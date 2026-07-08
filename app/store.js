
import tabReducer from './features/tab/tabSlice.js'
import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './features/employee/employeeSlice.js'

export default configureStore({
    reducer: {
        tab: tabReducer,
        employee: employeeReducer
    }
})