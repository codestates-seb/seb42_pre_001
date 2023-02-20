import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState: {
    id: null,
    name: null,
    title: null,
    content: null,
    tags: ['javascript', 'reactjs'],
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
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export default questionSlice;
export const { setName, setTitle, setContent, setTags } = questionSlice.actions;
