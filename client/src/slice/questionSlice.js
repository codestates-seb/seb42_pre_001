import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncUpFetch = createAsyncThunk(
  'questionSlice/asyncUpFetch',
  async () => {
    const response = await axios.get(
      'https://preproject-3ea3e-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json'
    );
    return response.data;
  }
);

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState: { questions: [], status: '' },
  reducers: {
    setQuestions: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.status = 'complete';
      console.log(state.questions);
    });
    builder.addCase(asyncUpFetch.rejected, (state) => {
      state.status = 'fail';
    });
  },
});

export default questionSlice;
export const { setQuestions } = questionSlice.actions;
