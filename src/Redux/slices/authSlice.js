import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true, // Start as true to prevent flash of login page or premature redirect on page refresh
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const payload = action.payload;

      // Extract tokens if passed in payload and save to localStorage for Authorization header fallback
      const tokens = payload?.tokens || payload?.data?.tokens;
      if (tokens?.access) {
        localStorage.setItem("access_token", tokens.access);
      }
      if (tokens?.refresh) {
        localStorage.setItem("refresh_token", tokens.refresh);
      }

      // Normalize user object whether payload is { user: {...}, access, refresh } or direct user object
      state.user = payload?.user ? payload.user : payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    clearUser: (state) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    setAuthLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, clearUser, setAuthLoading } = authSlice.actions;

// Selectors
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.isLoading;

export default authSlice.reducer;
