import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slice/loginSlice';
import signUpSlice from '../slice/signUpSlice';
import validationSlice from '../slice/validationSlice';

const store = configureStore({
  middleware: [...getDefaultMiddleware()],
  reducer: {
    login: loginSlice.reducer,
    signUp: signUpSlice.reducer,
    validation: validationSlice.reducer,
  },
});

export default store;
