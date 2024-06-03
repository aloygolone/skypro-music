import { getValueFromLocalStorage } from "@/lib/getValueFromLS";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";

type AuthStateType = {
  authState: boolean;
  userData: {
    id: number;
    email: string;
    username: string;
    refresh: string;
    access: string;
  };
};

const initialState: AuthStateType = {
  authState: false,
  userData: {
    id: 0,
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
        id?: number;
      }>
    ) => {
      state.userData = {
        id: action.payload.id || state.userData.id,
        email: action.payload.email || state.userData.email || getValueFromLocalStorage("user"),
        username: action.payload.username || state.userData.username,
        refresh: action.payload.refresh || state.userData.refresh,
        access: action.payload.access || state.userData.access || getValueFromLocalStorage("token"),
      };
    },
  },
});

export const { setAuthState, setUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;
