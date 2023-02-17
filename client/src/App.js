import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Inquiry from './pages/Inquiry';
import Tages from './pages/Tags';
import Users from './pages/Users';
import Companies from './pages/Companies';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import Ask from './pages/Ask';
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/questions" element={<Inquiry />}></Route>
        <Route path="/questions/ask" element={<Ask />}></Route>
        <Route path="/tags" element={<Tages />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/users/logout" element={<Logout />} />
      </Routes>
    </Provider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;  
  margin: 0;
  padding: 0;
  background-color: hsl(210, 8%, 93%);
  }
  a {
    text-decoration: none;
  }
`;
