import { createSlice } from '@reduxjs/toolkit';

const myInfoSlice = createSlice({
  name: 'myInfoSlice',
  initialState: {
    image: null,
    displayName: null,
    title: null,
    location: null,
    aboutMe: null,
  },
  reducers: {
    setImg: (state, action) => {
      state.image = action.payload;
    },
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAboutMe: (state, action) => {
      state.aboutMe = action.payload;
    },
  },
});

export default myInfoSlice;
export const { setImg, setDisplayName, setTitle, setLocation, setAboutMe } =
  myInfoSlice.actions;
