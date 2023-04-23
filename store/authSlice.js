import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userData: null,
    didTryAutoLogin: false,
  },
  reducers: {
    authentication: (state, action) => {
      const { payload } = action;
      state.token = payload.token;
      state.userData = payload.userData;
      state.didTryAutoLogin = true;
      console.log("state=>", state);
    },
    setDidTryAutoLogin: (state, action) => {
      state.didTryAutoLogin = true;
    },
    logout: (state, action) => {
      state.token = null;
      state.usrData = null;
      state.didTryAutoLogin = false;
    },
  },
});

export const authentication = authSlice.actions.authentication;
export const setDidTryAutoLogin = authSlice.actions.setDidTryAutoLogin;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;
