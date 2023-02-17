import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: { id: null, password: null },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export default loginSlice;
export const { setId, setPassword } = loginSlice.actions;
