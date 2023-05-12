import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./user.api";

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    clearToken: (state, action) => {
      state.token = null;
    },
  },
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      }
    );
    builder.addMatcher(
      userApi.endpoints.logout.matchFulfilled,
      (state, { payload }) => {
        state.user = null;
        state.token = null;
      }
    );
    builder.addMatcher(
      userApi.endpoints.updateUser.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.user = payload;
      }
    );
    builder.addMatcher(
      userApi.endpoints.getMyProfile.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.user = payload;
      }
    );
  },
});

export const selectUserFromState = (state) => state.user;
export const { setToken, clearToken } = userSlice.actions;
export default userSlice.reducer;
