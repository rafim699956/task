import tabReducer from './features/tab/tabSlice.js'
import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './features/employee/employeeSlice.js'
import taskPriorityReducer from './features/taskPriority/taskPrioritySlice.js'
import repetTaskReducer from './features/repetTask/repetTaskSlice.js'
import taskListReducer from './features/tasklist/tasklistSlice.js'
import themeReducer from './features/themeMode/themeSlice.js'
import sidebarReducer from './features/sidebar/sidebarSlice.js'
import languageReducer from './features/language/languageSlice.js'

export default configureStore({
    reducer: {
        tab: tabReducer,
        employee: employeeReducer,
        taskPriority: taskPriorityReducer,
        repetTask: repetTaskReducer,
        taskList: taskListReducer,
        theme: themeReducer,
        sidebar: sidebarReducer,
        language: languageReducer
    }
})