import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.slice'
import { userApi } from './user/user.api'
// import userREducer from './user/user.slice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})