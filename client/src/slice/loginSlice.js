import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    id: null,
    password: null,
    userInfo: null,
    isLogin: false,
    emailForPass: null,
    newPass: null,
    newPassConfirm: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setEmailForPass: (state, action) => {
      state.emailForPass = action.payload;
    },
    setNewPass: (state, action) => {
      state.newPass = action.payload;
    },
    setNewPassConfirm: (state, action) => {
      state.newPassConfirm = action.payload;
    },
  },
});

export default loginSlice;
export const {
  setId,
  setPassword,
  setUserInfo,
  setIsLogin,
  setEmailForPass,
  setNewPass,
  setNewPassConfirm,
} = loginSlice.actions;
