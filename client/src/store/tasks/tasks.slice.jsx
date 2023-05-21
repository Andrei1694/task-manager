import { createSlice } from "@reduxjs/toolkit";
import { tasksApi } from "./tasks.api";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      tasksApi.endpoints.getMyTasks.matchFulfilled,
      (state, { payload }) => {
        state.tasks = payload;
      }
    );
  },
});

export default tasksSlice.reducer;
