import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { loggedIn: false, name: 'AuthorName' },
  reducers: {
    authHandler: (state) => {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { authHandler } = authSlice.actions;

export default authSlice.reducer;
