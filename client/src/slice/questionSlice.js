import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState: {
    id: null,
    name: null,
    title: null,
    titleErrorMsg: null,
    content: null,
    contentErrorMsg: null,
    tags: [],
    tagsErrorMsg: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setTitleErrorMsg: (state, action) => {
      state.titleErrorMsg = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setContentErrorMsg: (state, action) => {
      state.contentErrorMsg = action.payload;
    },
    setTags: (state, action) => {
      state.tags.push(action.payload);
    },
    setTagsErrorMsg: (state, action) => {
      state.tagsErrorMsg = action.payload;
    },
  },
});

export default questionSlice;
export const {
  setName,
  setTitle,
  setTitleErrorMsg,
  setContent,
  setContentErrorMsg,
  setTags,
  setTagsErrorMsg,
} = questionSlice.actions;
