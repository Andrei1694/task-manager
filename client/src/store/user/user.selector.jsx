import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state) => state.user;

const selectUserState = createSelector(selectUser, (userState) => userState);

export const selectUserFromState = createSelector(
  selectUserState,
  ({ user }) => user
);

export const selectTokenFromState = createSelector(
  selectUserState,
  ({ token }) => token
);
