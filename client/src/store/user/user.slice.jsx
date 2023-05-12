import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./user.api";

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      }
    );
  },
});

export const selectUserFromState = (state) => state.user;

export default userSlice.reducer;
