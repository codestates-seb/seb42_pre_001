import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import styled from 'styled-components';
import Inquiry from './pages/Inquiry';
import Tages from './pages/Tags';
import Users from './pages/Users';
import Companies from './pages/Companies';

function App() {
  return (
    <>
      <Head>Header</Head>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inquiry" element={<Inquiry />}></Route>
        <Route path="/tags" element={<Tages />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/companies" element={<Companies />}></Route>
      </Routes>
    </>
  );
}

export default App;

const Head = styled.div`
  margin-top: 40px;
`;
