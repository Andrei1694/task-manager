import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.slice'
import { userApi } from './user/user.api'
import { tasksApi } from './tasks/tasks.api'
// import userREducer from './user/user.slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [tasksApi.reducerPath]: tasksApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware, tasksApi.middleware),
})