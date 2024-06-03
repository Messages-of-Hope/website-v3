"use strict";

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    image: null,
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
  },
});

export const { setUsername, setImage } = authSlice.actions;
export default authSlice;
