import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";

type AuthStateType = {
  authState: boolean;
  userData: {
    email: string;
    username: string;
    refresh: string;
    access: string;
  };
};

const initialState: AuthStateType = {
  authState: false,
  userData: {
    email: "",
    username: "",
    refresh: "",
    access: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
    },
    setUserData: (
      state,
      action: PayloadAction<{
        email?: string;
        username?: string;
        refresh?: string;
        access?: string;
      }>
    ) => {
      state.userData = {
        email: action.payload.email || state.userData.email,
        username: action.payload.username || state.userData.username,
        refresh: action.payload.refresh || state.userData.refresh,
        access: action.payload.access || state.userData.access,
      };
    },
  },
});

export const { setAuthState, setUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;
