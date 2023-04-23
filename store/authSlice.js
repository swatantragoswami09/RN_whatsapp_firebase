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
      console.log("state=>", state);
    },
    setDidTryAutoLogin: (state, action) => {
      state.didTryAutoLogin = true;
    },
  },
});

export const authentication = authSlice.actions.authentication;
export const setDidTryAutoLogin = authSlice.actions.setDidTryAutoLogin;
export default authSlice.reducer;
