import styled from 'styled-components';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { CgSearch } from 'react-icons/cg';
import MainButton from './MainButton';
function Header() {
  return (
    <Div>
      <Menu>
        <FiMenu size="20" />
      </Menu>
      <Img src={logo} alt="" />
      <Ol>
        <Li>
          <Links src="" alt="">
            About
          </Links>
        </Li>
        <Li>
          <Links src="" alt="">
            Products
          </Links>
        </Li>
        <Li>
          <Links src="" alt="">
            For Teams
          </Links>
        </Li>
      </Ol>
      <SearchBar>
        <Input />
        <SearchIcon>
          <CgSearch size="20" color="hsl(210,8%,55%)" />
        </SearchIcon>
      </SearchBar>
      <Ol>
        <Li>
          <MainButton buttonText="Log in" />
        </Li>
        <Li>
          <MainButton buttonText="Sign up" />
        </Li>
      </Ol>
    </Div>
  );
}

const Div = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  background-color: hsl(210, 8%, 97.5%);
`;

const Menu = styled.a`
  cursor: pointer;
  padding: 0 16px;
`;

const Img = styled.img`
  width: 140px;
  margin-right: 8px;
`;

const Ol = styled.ol`
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  list-style: none;
`;

const Links = styled.a`
  font-size: small;
  padding: 6px 12px;
  color: hsl(210, 8%, 35%);
  white-space: nowrap;
  align-items: center;
  border: none;
  border-radius: 1000px;
  display: flex;
  position: relative;
  user-select: auto;
  cursor: pointer;
  :hover {
    color: hsl(210, 8%, 35%);
    background-color: hsl(210, 8%, 90%);
  }
`;

const SearchBar = styled.div`
  width: 50%;
`;

const SearchIcon = styled.div`
  width: 20px;
  position: relative;
  padding: 0 8px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  padding: 7.8px 9.1px 7.8px 32px;
  margin: 0 8px;
`;

export default Header;
