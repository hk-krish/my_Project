import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: Boolean(localStorage.getItem("Zono-Auth-Token")),
  },
  reducers: {
    login(state) {
      const token = "Zono-React";
      localStorage.setItem("Zono-Auth-Token", JSON.stringify(token));
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.removeItem("Zono-Auth-Token");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
