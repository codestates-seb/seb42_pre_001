import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import answerSlice from '../slice/answerSlice';
import loginSlice from '../slice/loginSlice';
import signUpSlice from '../slice/signUpSlice';
import validationSlice from '../slice/validationSlice';
import inquirySlice from '../slice/inquirySlice';
import questionSlice from '../slice/questionSlice';
const store = configureStore({
  middleware: [...getDefaultMiddleware()],
  reducer: {
    login: loginSlice.reducer,
    signUp: signUpSlice.reducer,
    validation: validationSlice.reducer,
    question: questionSlice.reducer,
    answer: answerSlice.reducer,
    inquiry: inquirySlice.reducer,
  },
});

export default store;
