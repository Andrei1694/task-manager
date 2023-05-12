import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers, { getState }) => {
      console.log(getState().user.token);
      const token = getState().user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: "/users/me",
        method: "PATCH",
        body: user,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutMutation,
  useUpdateUserMutation,
} = userApi;
