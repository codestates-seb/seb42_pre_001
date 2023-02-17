import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Fragment } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import store from './store/store';
import { Provider } from 'react-redux';

// 전역 CSS 적용
const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  a {
    text-decoration: none;

  }
`;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <GlobalStyle></GlobalStyle>
          <Routes>
            <Route path="/users/login" element={<Login />} />\
            <Route path="/users/signup" element={<SignUp />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
