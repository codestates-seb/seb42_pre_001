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
    discardTitle: false,
    discardEditor: false,
    discardTags: false,
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
      state.allTags = action.payload;
    },
    setDeleteTag: (state, action) => {
      state.allTags = state.allTags.filter((el) => {
        return el !== action.payload;
      });
    },
    setTagsFocus: (state, action) => {
      state.tagsFocus = action.payload;
    },
    setDiscardTitle: (state, action) => {
      state.discardTitle = action.payload;
    },
    setDiscardEditor: (state, action) => {
      state.discardEditor = action.payload;
    },
    setDiscardTags: (state, action) => {
      state.discardTags = action.payload;
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
  setDiscardTitle,
  setDiscardEditor,
  setDiscardTags,
} = questionSlice.actions;
