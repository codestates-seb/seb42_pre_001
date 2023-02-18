import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answerSlice',
  initialState: {
    id: null,
    name: null,
    title: null,
    content: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default answerSlice;
export const { setName, setTitle, setContent, setTags } = answerSlice.actions;
