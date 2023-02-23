import { createSlice } from '@reduxjs/toolkit';

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState: {
    id: null,
    name: null,
    title: null,
    titleErrorMsg: null, // X
    titleFocus: false,
    content: null,
    contentErrorMsg: null, // X
    contentFocus: false,
    currentTag: '', // X
    allTags: [],
    tagsErrorMsg: null, // X
    tagsFocus: false,
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
    setTitleFocus: (state, action) => {
      state.titleFocus = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setContentErrorMsg: (state, action) => {
      state.contentErrorMsg = action.payload;
    },
    setContentFocus: (state, action) => {
      state.contentFocus = action.payload;
    },
    setCurrentTag: (state, action) => {
      state.currentTag = action.payload;
    },
    setAllTags: (state, action) => {
      state.allTags.push(action.payload);
    },
    setDeleteTag: (state, action) => {
      state.allTags = state.allTags.filter((el) => {
        return el !== action.payload;
      });
    },
    setTagsErrorMsg: (state, action) => {
      state.tagsErrorMsg = action.payload;
    },
    setTagsFocus: (state, action) => {
      state.tagsFocus = action.payload;
    },
  },
});

export default questionSlice;
export const {
  setName,
  setTitle,
  setTitleErrorMsg,
  setTitleFocus,
  setContent,
  setContentErrorMsg,
  setContentFocus,
  setCurrentTag,
  setAllTags,
  setDeleteTag,
  setTagsErrorMsg,
  setTagsFocus,
} = questionSlice.actions;
