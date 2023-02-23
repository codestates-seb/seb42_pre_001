import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answerSlice',
  initialState: {
    content: null,
  },
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default answerSlice;
export const { setContent } = answerSlice.actions;
