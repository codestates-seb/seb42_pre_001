import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import store from './store/store';
import { Provider } from 'react-redux';
import Logout from './pages/Logout';

// 전역 CSS 적용
const GlobalStyle = createGlobalStyle`
  body {box-sizing: border-box;
  width: 100vw;
  height: 100vh;  
  background-color: hsl(210, 8%, 93%);
  }
  a {
    text-decoration: none;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Routes>
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<SignUp />} />
          <Route path="/users/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
