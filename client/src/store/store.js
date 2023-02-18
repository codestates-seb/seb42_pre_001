import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import answerSlice from '../slice/answerSlice';
import loginSlice from '../slice/loginSlice';
import questionSlice from '../slice/questionSlice';
import signUpSlice from '../slice/signUpSlice';
import validationSlice from '../slice/validationSlice';

const store = configureStore({
  middleware: [...getDefaultMiddleware()],
  reducer: {
    login: loginSlice.reducer,
    signUp: signUpSlice.reducer,
    validation: validationSlice.reducer,
    answer: answerSlice.reducer,
    question: questionSlice.reducer,
  },
});

export default store;
