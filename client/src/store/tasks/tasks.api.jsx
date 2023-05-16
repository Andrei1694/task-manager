import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/tasks",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (task) => ({
        method: "POST",
        body: task,
      }),
    }),
    updateTask: builder.mutation({
      query: ({ _id, ...body }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body,
      }),
    }),
    getMyTasks: builder.query({
      query: () => "",
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useLazyGetMyTasksQuery,
  useUpdateTaskMutation,
} = tasksApi;
