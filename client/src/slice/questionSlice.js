import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState: {
    id: null,
    name: null,
    title: null,
    titleFocus: false,
    content: null,
    contentFocus: false,
    allTags: [],
    tagsFocus: false,
    isDiscard: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setTitleFocus: (state, action) => {
      state.titleFocus = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setContentFocus: (state, action) => {
      state.contentFocus = action.payload;
    },
    setAllTags: (state, action) => {
      state.allTags.push(action.payload);
    },
    setDeleteTag: (state, action) => {
      state.allTags = state.allTags.filter((el) => {
        return el !== action.payload;
      });
    },
    setTagsFocus: (state, action) => {
      state.tagsFocus = action.payload;
    },
    setIsDiscard: (state, action) => {
      state.isDiscard = action.payload;
    },
  },
});

export default questionSlice;
export const {
  setName,
  setTitle,
  setTitleFocus,
  setContent,
  setContentFocus,
  setAllTags,
  setDeleteTag,
  setTagsFocus,
  setIsDiscard,
} = questionSlice.actions;
