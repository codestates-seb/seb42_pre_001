import { createSlice } from '@reduxjs/toolkit';

const signUpSlice = createSlice({
  name: 'signUpSlice',
  initialState: {
    displayName: null,
    email: null,
    password: null,
    isSubmit: false,
  },
  reducers: {
    setDN: (state, action) => {
      state.displayName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setSubmit: (state) => {
      state.isSubmit = true;
    },
  },
});

export default signUpSlice;
export const { setDN, setEmail, setPassword, setSubmit } = signUpSlice.actions;
