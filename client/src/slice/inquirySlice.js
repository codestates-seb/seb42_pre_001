import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncUpFetch = createAsyncThunk(
  'inquirySlice/asyncUpFetch',
  async () => {
    const response = await axios.get(
      'https://preproject-3ea3e-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json'
    );
    return response.data;
  }
);

const inquirySlice = createSlice({
  name: 'inquirySlice',
  initialState: { inquiry: [], status: '' },
  reducers: {
    setInquiry: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.inquiry = action.payload;
      state.status = 'complete';
      console.log(state.inquiry);
    });
    builder.addCase(asyncUpFetch.rejected, (state) => {
      state.status = 'fail';
    });
  },
});

export default inquirySlice;
export const { setInquiry } = inquirySlice.actions;
