import { createSlice } from '@reduxjs/toolkit';

const validationSlice = createSlice({
  name: 'validationSlice',
  initialState: { errMsg1: null, errMsg2: null },
  reducers: {
    setErrorMsg1: (state, action) => {
      state.errMsg1 = action.payload;
    },
    setErrorMsg2: (state, action) => {
      state.errMsg2 = action.payload;
    },
  },
});

export default validationSlice;
export const { setErrorMsg1, setErrorMsg2 } = validationSlice.actions;
