import { createSelector } from "@reduxjs/toolkit";

const selectUser = (state) => state.user;

export const selectUserFromState = createSelector(selectUser, (user) => {
  console.log("bam", user);
  return user;
});
