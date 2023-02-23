import { createSlice } from '@reduxjs/toolkit';

const validationSlice = createSlice({
  name: 'validationSlice',
  initialState: {
    errMsg1: undefined,
    errMsg2: undefined,
    errMsg3: undefined,
    errMsg4: undefined,
    errMsg5: undefined,
  },
  reducers: {
    // 회원가입 에러 메시지
    setErrorMsg1: (state, action) => {
      state.errMsg1 = action.payload;
    },
    setErrorMsg2: (state, action) => {
      state.errMsg2 = action.payload;
    },
    // 로그인 에러 메시지
    setErrorMsg3: (state, action) => {
      state.errMsg3 = action.payload;
    },
    setErrorMsg4: (state, action) => {
      state.errMsg4 = action.payload;
    },
    // 비밀번호 찾기 이메일 검증 에러 메시지
    setErrorMsg5: (state, action) => {
      state.errMsg5 = action.payload;
    },
  },
});

export default validationSlice;
export const {
  setErrorMsg1,
  setErrorMsg2,
  setErrorMsg3,
  setErrorMsg4,
  setErrorMsg5,
} = validationSlice.actions;
